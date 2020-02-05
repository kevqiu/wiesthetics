import dayjs from 'dayjs';
import db from './_utils/db';

export default async (req, res) => {
    if (req.method === 'GET') {
        await getAll(req, res);
        return;
    }
    else if (req.method === 'POST') {
        await postSlot(req, res);
        return;
    }
}

/**
 * GET all slots
 */
const getAll = async (req, res) => {
    let query = 'SELECT * FROM slots ';
    let queryParams = [];

    if (req.query.from) {
        const fromDate = dayjs(req.query.from);
        if (!fromDate.isValid()) {
            res.status(400).json({ error: 'from query is invalid date format' });
        }
        query += 'WHERE date >= $1 ';
        queryParams.push(fromDate.toISOString());
    }
    query += 'ORDER BY date DESC'

    try {
        const { rows } = await db.query(query, queryParams);
        res.json(rows);
    }
    catch (e) {
        res.status(400).json({ error: e.stack });
    }
};

/**
 * POST new slot 
 */
const postSlot = async (req, res) => {
    const { date } = req.body;
    if (!date) {
        res.status(400).json({ error: 'no date in body' });
        return;
    }
    const dateObj = dayjs(date);
    if (!dateObj.isValid()) {
        res.status(400).json({ error: 'invalid date format' });
        return;
    }

    let query = 'INSERT INTO slots (booked, date) VALUES (false, $1)';

    try {
        await db.query(query, [dateObj.toISOString()]);
        res.json({});
    } catch (e) {
        res.status(400).json({ error: e.stack });
    }
};

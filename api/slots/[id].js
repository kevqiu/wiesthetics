import db from '../_utils/db';

export default async (req, res) => {
    if (req.method === 'GET') {
        await getSlotById(req, res);
    }
    else if (req.method === 'PATCH') {
        await patchSlot(req, res);
    }
    else if (req.method === 'DELETE') {
        await deleteSlot(req, res);
    }
}

/**
 * GET by ID
 */
const getSlotById = async (req, res) => {
    const { id } = req.query;
    let query = 'SELECT * FROM slots WHERE id = $1 LIMIT 1';

    try {
        const { rows, rowCount } = await db.query(query, [id]);
        if (rowCount === 0) {
            res.status(404).json({ error: `no slots found with id = ${id}` });
            return;
        }
        res.json(rows[0]);
    } catch (e) {
        res.status(400).json({ error: e.stack });
    }
};

/**
 * PATCH slot to update booked status
 */
const patchSlot = async (req, res) => {
    const { id } = req.query;
    const { booked } = req.body;
    if (typeof booked !== 'boolean') {
        res.status(400).json({ error: 'booked must be of type boolean' });
        return;
    }

    let query = 'UPDATE slots SET booked = $1 WHERE id = $2';

    try {
        const { rowCount } = await db.query(query, [booked, id]);
        if (rowCount === 0) {
            res.status(404).json({ error: `no slots found with id = ${id}` });
            return;
        }
        res.json({});
    } catch (e) {
        res.status(400).json({ error: e.stack });
    }
};

/**
 * DELETE by ID
 */
const deleteSlot = async (req, res) => {
    const { id } = req.params;
    let query = 'DELETE FROM slots WHERE id = $1';

    try {
        const { rowCount } = await db.query(query, [id]);
        if (rowCount === 0) {
            res.status(404).json({ error: `no slots found with id = ${id}` });
            return;
        }
        res.json({});
    } catch (e) {
        res.status(400).json({ error: e.stack });
    }
};


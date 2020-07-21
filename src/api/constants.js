import window from 'global/window';

const hostname = window && window.location && window.location.hostname;
let baseUrl = '';

if (hostname === 'localhost') {
    baseUrl = 'http://localhost:3000';
} else if (hostname === 'wiesthetics.now.sh') {
    baseUrl = 'https://wiesthetics.now.sh';
}

export const API_BASE_URL = `${baseUrl}/api`;


export const Endpoint = Object.freeze({
    SLOTS: 'slots',
    BOOKINGS: 'bookings'
});
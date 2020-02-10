const hostname = window && window.location && window.location.hostname;
let baseUrl = '';

console.log(hostname)
if (hostname === 'localhost') {
    baseUrl = 'http://localhost:3000';
} else if (hostname === 'wiesthetics.now.sh') {
    baseUrl = 'https://wiesthetics.now.sh';
}

export const API_BASE_URL = `${baseUrl}/api`;
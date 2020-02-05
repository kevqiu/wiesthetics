import { BASE_URL } from "./constants";

export const getRequest = (endpoint) =>
    fetch(BASE_URL + endpoint, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    });

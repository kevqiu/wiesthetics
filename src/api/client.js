import { API_BASE_URL } from "./constants";

export const getAllRequest = (endpoint) =>
    fetch(`${API_BASE_URL}/${endpoint}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    });


export const getByIdRequest = (endpoint, id) =>
    fetch(`${API_BASE_URL}/${endpoint}/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    });

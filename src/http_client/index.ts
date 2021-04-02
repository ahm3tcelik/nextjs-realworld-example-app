import axios from 'axios';

export const httpClient = axios.create({
    baseURL: process.env.API_URL,
    timeout: 3000,
    headers: {
        'Content-Type': 'application/json'
    }
});

export * from './endpoints';


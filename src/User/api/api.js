import axios from "axios";

export const apiUsers = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    headers: {
        'content-type': 'application/json'
    }
})
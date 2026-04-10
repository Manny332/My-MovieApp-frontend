import axios from 'axios';

export default axios.create({
    baseURL:'https://18.117.181.29:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});
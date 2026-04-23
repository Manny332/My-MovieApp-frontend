import axios from 'axios';

export default axios.create({
    baseURL:'http//51.21.253.59:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});

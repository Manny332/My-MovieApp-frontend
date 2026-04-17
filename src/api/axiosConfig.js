import axios from 'axios';

export default axios.create({
    baseURL:'http://4.207.121.45:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});

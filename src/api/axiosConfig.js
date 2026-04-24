import axios from 'axios';

export default axios.create({
    baseURL:'http//13.51.165.234:8080',
    headers: {
        'Content-Type': 'application/json',
    },
});

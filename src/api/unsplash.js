import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID af704aef45d9d5bf11ac281a5a7437fa259d7361411d4f4f0fca68d9b94326b1'
    }
});
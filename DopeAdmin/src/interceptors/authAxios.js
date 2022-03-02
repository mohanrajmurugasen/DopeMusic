import axios from "axios";

const token = localStorage.getItem('auth');
const url = 'http://localhost:4000/';

const authAxios = axios.create({
    baseURL: url,
    headers: {
        Authentication: token,
    },
});

export default authAxios;
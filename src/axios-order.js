import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-guide-41949-default-rtdb.asia-southeast1.firebasedatabase.app/'
});

export default instance;
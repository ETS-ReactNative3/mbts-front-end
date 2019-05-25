import axios from 'axios';

var config = {
    headers: {'Access-Control-Allow-Origin': '*'}
};

class Api {

    static urlAuth = (process.env.NODE_ENV === 'development') ? 'https://localhost:8000/auth' : 'https://mieszkobulik.pl/auth';
    static url = (process.env.NODE_ENV === 'development') ? 'https://localhost:8000/api' : 'https://mieszkobulik.pl/api';

    static urlMail = 'https://mieszkobulik.pl/mail';


    async list(type, page = 1) {
        let { data } = await axios.get(`${Api.url}/${type}/list?page=${page}`, config);
        return data;
    }

    async get(id, type) {
        let { data } = await axios.get(`${Api.url}/${type}/${id}`);
        return data;
    }

    async post(dto, type) {
        let { data } = await axios.post(`${Api.url}/${type}`, dto);
        return data;
    }

    async put(dto, type) {
        let { data } = await axios.put(`${Api.url}/${type}`, dto);
        return data;
    }

    async del(id, type) {
        let { data } = await axios.delete(`${Api.url}/${type}/${id}`);

        return data;
    }

    async authenticate(type = 'google') {
        axios.get(`${Api.urlAuth}/${type}`);
    }

    async getUser() {
        let { data } = await axios.get(`${Api.url}/user`);

        return data;
    }

    async sentOrder(dto) {
        let { data } = await axios.post(`${Api.url}/order`, dto);
        return data;
    }

    async userList() {
        let { data } = await axios.get(`${Api.url}/users/list`);
        return data;
    }

    async saveUsers(user) {
        debugger;
        let { data } = await axios.put(`${Api.url}/users/save`, user);
        return data;
    }
}
const api = new Api();
export default api;

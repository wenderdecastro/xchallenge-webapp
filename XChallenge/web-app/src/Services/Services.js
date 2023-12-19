import axios from "axios";

const apiPort = '5029';
const localApiUri = `http://localhost:${apiPort}/api`;
// const externalApiUri = null;

const api = axios.create({
    baseURL: localApiUri
});

export default api;
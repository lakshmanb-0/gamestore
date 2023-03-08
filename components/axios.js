import axios from "axios";

const instance = axios.create({
    baseURL: `http://store.steampowered.com/api/appdetails/`,
});

export default instance;
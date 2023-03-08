import axios from "axios";

const instance = axios.create({
    baseURL: `https://store.steampowered.com/api/appdetails/`,
});

export default instance;
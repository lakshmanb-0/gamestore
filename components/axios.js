import axios from "axios";

const instance = axios.create({
    baseURL: `https://store.steampowered.com/api/featuredcategories/`,
});

export default instance;
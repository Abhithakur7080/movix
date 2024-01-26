import axios from "axios";

const BASE_URL = "";

const TMDB_TOKEN = import.meta.env.VITE_APP_API_ACCESS_TOKEN;

const headers = {
    Authorization: "bearer " + TMDB_TOKEN,
}
export const fetchDataFromAPI = async (url, params) => {
    try {
        const { data } = await axios.get(BASE_URL+url, {
            headers,
            params
        })
        return data;
    } catch (error) {
        console.log(error);
        return error;
    }
}

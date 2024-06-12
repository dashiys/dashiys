import axios from "axios";

export const getInfo = async () => {
    const d = await axios.get("https://swapi.dev/api/people/");
    return d.data.results;
};

export const getPerso = async (id) => {
    const d = await axios.get(`https://swapi.dev/api/people/${id}`);
    console.log('777777', d)
    return d.data;
};

export const getFilms = async (urls) => {
    const data = await Promise.all(urls.map(async (url) => {
        const r = await axios.get(url);
        return r.data;
    }))
    return data
}


export const getNums = async (id = 1) => {
    const d = await axios.get(`https://swapi.dev/api/people/?page=${id}`);
    return d.data.results;
};

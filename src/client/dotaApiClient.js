import axios from "axios";
//docs https://docs.opendota.com/#tag/heroes
const baseApiClient = axios.create({
  baseURL: "https://api.opendota.com/api/heroes",
  withCredentials: false,
});
const url = "https://api.opendota.com/api/heroes";

const getHeroesAxiosAsync = async () => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

const getHeroesFetchAsync = async () => {
  try {
    const response = await fetch(url);
    return response.json();
  } catch (error) {
    console.error(error);
  }
};

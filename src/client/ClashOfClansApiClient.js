import axios from "axios";
//https://developer.clashroyale.com/#/documentation

const baseApiClient = axios.create({
  baseURL: "https://api.clashroyale.com/v1/cards",
  withCredentials: false,
});

const getFetchCardsAsync = async () => {
  try {
    const response = await fetch(`https://api.clashroyale.com/v1/cards`, {
      headers: {
        Authorization: `Bearer ${APIKEY}`,
      },
    });
    return response.json();
  } catch (error) {
    console.error(error);
  }
};
const getFetchCards = () => {
  return fetch(`https://api.clashroyale.com/v1/cards`, {
    headers: {
      Authorization: `Bearer ${APIKEY}`,
    },
  }).then((response) => response.json());
};

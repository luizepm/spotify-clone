import "dotenv/config";
import axios from "axios";

const NODE_ENV = process.env.NODE_ENV || "development";

const URL = NODE_ENV === "development" ? "http://localhost:3000" : "/api/";

//const URL = "https://back-end-jornada-production.up.railway.app";

export const getArtists = async () => {
  const response = await axios.get(`${URL}/artists`);

  console.log('Get request to "artists"');

  if (response.status === 200) {
    return response.data;
  }
};

export const getSongs = async () => {
  const response = await axios.get(`${URL}/songs`);

  console.log('Get request to "songs"');

  if (response.status === 200) {
    return response.data;
  }
};

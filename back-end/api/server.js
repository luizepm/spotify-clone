import express from "express";
import cors from "cors";
import { db } from "./connect.js";
import { artistArray } from "../../front-end/src/assets/database/artists.js";
import { songsArray } from "../../front-end/src/assets/database/songs.js";

const app = express();
const PORT = 3001;

app.use(cors());
// app.use(express.json());

app.get("/", (request, response) => {
  response.send("Só vamos trabalhar com os endpoints '/artists' e '/songs'");
});

app.get("/artists", async (request, response) => {
  response.send(await db.collection("artists").find({}).toArray());
});

app.get("/songs", async (request, response) => {
  response.send(await db.collection("songs").find({}).toArray());
});

app.get("/artists_json", async (request, response) => {
  response.send(artistArray);
});

app.get("/songs_json", async (request, response) => {
  response.send(songsArray);
});

app.listen(PORT, () => {
  console.log(`Servidor está escutando na porta ${PORT}`);
});
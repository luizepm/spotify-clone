import express from "express";
import cors from "cors";
import { db } from "./connect.js";
import { artistArray } from "../../front-end/src/assets/database/artists.js";
import { songsArray } from "../../front-end/src/assets/database/songs.js";
import path from "path";

const __dirname = path.resolve();

const app = express();
const PORT = 3001;

app.use(cors());
// app.use(express.json());

app.get("/api/", (request, response) => {
  response.send("Só vamos trabalhar com os endpoints '/artists' e '/songs'");
});

app.get("/api/artists", async (request, response) => {
  response.send(await db.collection("artists").find({}).toArray());
});

app.get("/api/songs", async (request, response) => {
  response.send(await db.collection("songs").find({}).toArray());
});

app.get("/api/artists_json", async (request, response) => {
  response.send(artistArray);
});

app.get("/api/songs_json", async (request, response) => {
  response.send(songsArray);
});

// Configuro o express para servir arquivos estáticos do front-end
app.use(express.static(path.join(__dirname, "../front-end/dist")));

// Qualquer outra url, vai direcionar para index
app.get("*", async (request, response) => {
  response.sendFile(path.join(__dirname, "../front-end/dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`Servidor está escutando na porta ${PORT}`);
});
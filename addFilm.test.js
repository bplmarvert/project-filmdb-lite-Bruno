import { addFilm } from "./addFilm.js";
import fs from "fs";
import { createInitialFile } from "./createInitialFile";

let aFilm = {
  nom: "la chambre des secrets",
  annee: 2020,
  miniature: "miniature6",
  emplacement: "ici",
  acteurs: [{ nom: "Potter", prenom: "Harry" }],
  synopsis: "Film de Harry Potter",
  genre: "Fantasy",
  realisateur: "Rowling",
};

function nbLines() {
  let file = fs.readFileSync("listeFilms.json", "utf-8");
  let theFilms = JSON.parse(file);
  return theFilms.length;
}

// on verifie qu'il y a un film de plus après addFilm et qu'il contient les bonnes données
test("addFilm", () => {
  createInitialFile();
  expect(nbLines()).toBe(5);
  addFilm(aFilm);
  expect(nbLines()).toBe(6);
  let file = fs.readFileSync("listeFilms.json", "utf-8");
  let theFilms = JSON.parse(file);
  expect(theFilms[5].realisateur.includes("Rowl")).toBe(true);
});

import prompts from "prompts";
import { addFilm } from "./addFilm.js";
import fs from "fs";
import { createInitialFile } from "./createInitialFile";

// this file contains 5 films

let unFilm = {
  nom: "la chambre des secrets",
  annee: 2020,
  miniature: "miniature6",
  emplacement: "ici",
  acteurs: [{ nom: "Potter", prenom: "Harry" }],
  synopsis: "Film de Harry Potter",
  genre: "Fantasy",
  realisateur: "Rowling",
};
function nbLignesAvant() {
  createInitialFile();
  let fichier = fs.readFileSync("listeFilms.json", "utf-8");
  let lesFilms = JSON.parse(fichier);
  return lesFilms.length;
}

function nbLignesAprès() {
  addFilm(unFilm);
  let fichier = fs.readFileSync("listeFilms.json", "utf-8");
  let lesFilms = JSON.parse(fichier);
  return lesFilms.length;
}
let fichier = fs.readFileSync("listeFilms.json", "utf-8");
let lesFilms = JSON.parse(fichier);

// on verifie qu'il y a un film de plus après addFilm
test("addFile", () => {
  expect(nbLignesAvant()).toBe(5);
  expect(nbLignesAprès()).toBe(6);
  expect(lesFilms[5].realisateur.includes("Rowl")).toBe(true);
});

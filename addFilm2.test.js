import { createInitialFile } from "./createInitialFile.js";
import { addFilm } from "./addFilm";
import { choseFilmToAdd } from "./choseFilmToAdd.js";
import fs from "fs";
jest.mock("./choseFilmToAdd");

// ce fichier a été créé pour faire des tests de mocking, mais comme je n'ai pas mocké les bonnes fonctions,
// son execution est quasi identique au précédent (addFilm.test.js)

function nbLines() {
  let fichier = fs.readFileSync("listeFilms.json", "utf-8");
  let lesFilms = JSON.parse(fichier);
  return lesFilms.length;
}

test("Ajout d'un film Harry Potter", () => {
  createInitialFile(); // Contient 5 films aucun de la warner ni de Harry Potter
  expect(nbLines()).toBe(5);
  choseFilmToAdd.mockReturnValue({
    nom: "la chambre des secrets",
    annee: 2003,
    miniature: "miniature6",
    emplacement: "ici",
    acteurs: [{ nom: "Potter", prenom: "Harry" }],
    synopsis: "Film de Harry Potter",
    genre: "Fantasy",
    realisateur: "Warner",
  });

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

  addFilm(aFilm);
  expect(nbLines()).toBe(6);
  let fichier = fs.readFileSync("listeFilms.json", "utf-8");
  let lesFilms = JSON.parse(fichier);
  expect(lesFilms[lesFilms.length - 1].realisateur.includes("Rowl")).toBe(true);
});

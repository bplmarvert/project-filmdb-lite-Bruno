//const fs = require("fs");
import fs from "fs";

// fonction coupée en 2 pour faire des tests mock
export function createInitialList() {
  let listFilms = [
    {
      nom: "film1",
      annee: 2020,
      miniature: "miniature1",
      emplacement: "http://www.google.fr",
      acteurs: [{ nom: "acteur1", prenom: "prenom1" }],
      synopsis: "ceci est un synopsis",
      genre: "drame",
      realisateur: "realisateur1",
    },

    {
      nom: "film2",
      annee: 2019,
      miniature: "miniature2",
      emplacement: "lieu2",
      acteurs: [{ nom: "acteur1", prenom: "prenom1" }],
      synopsis: "ceci est un synopsis",
      genre: "comedie",
      realisateur: "realisateur2",
    },

    {
      nom: "film3",
      annee: 2018,
      miniature: "miniature3",
      emplacement: "lieu3",
      acteurs: [{ nom: "acteur1", prenom: "prenom1" }],
      synopsis: "ceci est un synopsis",
      genre: "comedie",
      realisateur: "realisateur3",
    },

    {
      nom: "le grand bleu",
      annee: 1988,
      miniature: "miniature4",
      emplacement: "Ocean",
      acteurs: [{ nom: "reno", prenom: "jean" }],
      synopsis:
        "En Grèce dans les années 1960, le jeune Français Jacques Mayol aime plonger. L Italien Enzo Molinari en fait déjà son rival.",
      genre: "Drame",
      realisateur: "luc besson",
    },

    {
      nom: "les 101 dalmatiens",
      annee: 1961,
      miniature: "miniature5",
      emplacement: "lieu5",
      acteurs: [{ nom: "pongo", prenom: "perdita" }],
      synopsis: "l'histoire des 101 Dalmatiens",
      genre: "Enfants",
      realisateur: "Disney",
    },
  ];
  return listFilms;
}

export function createInitialFile() {
  let listFilms = createInitialList();
  fs.writeFileSync("listeFilms.json", JSON.stringify(listFilms));
}

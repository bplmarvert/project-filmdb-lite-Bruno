//const fs = require("fs");
import fs from "fs";

/* Creation du fichier de films initial */
export function createInitialFile() {
  let listeFilms = [
    {
      nom: "film1",
      annee: 2020,
      miniature: "miniature1",
      emplacement: "http://www.google.fr",
      acteurs: [{ nom: "acteur1", prenom: "prenom1" }],
      synopsis: "ceci est un synopsis",
      genre: "comedie",
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
      nom: "film4",
      annee: 2017,
      miniature: "miniature4",
      emplacement: "lieu4",
      acteurs: [{ nom: "acteur1", prenom: "prenom1" }],
      synopsis: "ceci est un synopsis",
      genre: "comedie",
      realisateur: "realisateur2",
    },

    {
      nom: "Les 101 Dalmatiens",
      annee: 1961,
      miniature: "miniature5",
      emplacement: "lieu5",
      acteurs: [{ nom: "pongo", prenom: "perdita" }],
      synopsis: "l'histoire des 101 Dalmatiens",
      genre: "Enfants",
      realisateur: "Disney",
    },
  ];

  fs.writeFileSync("listeFilms.json", JSON.stringify(listeFilms));
}

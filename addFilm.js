import chalk from "chalk";
import prompts from "prompts";
import fs from "fs";

let unFilm = {
  nom: "la chambre des secrets",
  annee: 2003,
  miniature: "miniature6",
  emplacement: "ici",
  acteurs: [{ nom: "Potter", prenom: "Harry" }],
  synopsis: "Film de Harry Potter",
  genre: "Fantasy",
  realisateur: "Warner",
};

export async function choixFilmToAdd() {
  console.log(chalk.greenBright("Quel film voulez vous ajouter ?"));

  const nouveauFilm = await prompts([
    {
      type: "text",
      name: "nom",
      message: "Nom du film ?",
    },
    {
      type: "number",
      name: "annee",
      message: "il est sorti en :",
    },
    {
      type: "text",
      name: "miniature",
      message: "la miniature est ",
    },
    {
      type: "text",
      name: "emplacement",
      message: "ou peut on trouver ce film (lien internet)",
    },
    {
      type: "text",
      name: "acteurs",
      message: "Qui sont les acteurs ?",
    },
    {
      type: "text",
      name: "synopsis",
      message: "Entrez le Synopsis",
    },
    {
      type: "text",
      name: "genre",
      message: "De quel genre est ce film ",
    },
    {
      type: "text",
      name: "realisateur",
      message: "le nom du réalisateur est :",
    },
  ]);
}

export function addFilm(nouveauFilm) {
  let fichier = fs.readFileSync("listeFilms.json", "utf-8");
  let lesFilms = JSON.parse(fichier);
  lesFilms.push(nouveauFilm);
  fs.writeFileSync("listeFilms.json", JSON.stringify(lesFilms));
}

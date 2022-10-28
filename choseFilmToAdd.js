import chalk from "chalk";
import prompts from "prompts";
import fs from "fs";

export async function choseFilmToAdd() {
  console.log(chalk.greenBright("Quel film voulez vous ajouter ?"));

  const newFilm = await prompts([
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
  return newFilm;
}

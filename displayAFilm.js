import fs from "fs";
import chalk from "chalk";
import prompts from "prompts";

export default async function displayAFilm() {
  //console.log(chalk.red("Quel film voulez vous afficher ?"));

  const promptTodisplay = await prompts({
    type: "text",
    name: "film",
    message: "Quel film voulez vous afficher ?",
  });
  let filmName = promptTodisplay.film;

  let fichier = fs.readFileSync("listeFilms.json", "utf-8");
  let lesFilms = JSON.parse(fichier);
  for (let i = 0; i <= lesFilms.length; i += 1) {
    let film = lesFilms[i];
    if (film.nom === filmName) {
      console.log(
        chalk.red(
          "\n \n Le film : ",
          film.nom,
          " , dans le genre : ",
          film.genre
        ),
        chalk.green(
          " est sorti en ",
          film.annee,
          "\n ",
          " vous pouvez l'identifier par sa ",
          film.miniature,
          "\n",
          " il se trouve à ",
          film.emplacement,
          " et a les acteurs",
          film.acteurs[0].nom,
          film.acteurs[0].prenom,
          ".\n",
          " voici son synopsis : ",
          film.synopsis,
          "\n",
          " Son réalisateur est : ",
          film.realisateur,
          "\n \n"
        )
      );
      return true;
    }
  }
}

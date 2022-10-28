import { choixFilmToAdd, addFilm } from "./addFilm.js";
import { listeFilms } from "./listeFilms.js";
import displayAFilm from "./displayAFilm.js";
import removeFilm from "./removeFilm.js";
import requestDisplayCriterion from "./requestDisplayCriterion.js";
import chalk from "chalk";
import prompts from "prompts";
import { createInitialFile } from "./createInitialFile.js";

export default async function menu() {
  let choisir = true;
  console.clear();
  createInitialFile();
  while (choisir === true) {
    console.log(chalk.blue("Que voulez vous faire ?"));
    console.log(
      chalk.blue(
        "\n \
        1) Afficher la liste simplifiée des films \n \
        2) Afficher les détails d'un film \n \
        3) Ajouter un film \n \
        4) Retirer un film \n \
        5) Afficher les films répondant à un critère \n \
        9) Quitter"
      )
    );

    const promptChoix = await prompts({
      type: "number",
      name: "choix",
      message: "Veuillez saisir le no de l'option choisie ?",
    });

    if (promptChoix.choix === 1) {
      listeFilms();
    }
    if (promptChoix.choix === 2) {
      await displayAFilm();
    }
    if (promptChoix.choix === 3) {
      let nouveauFilm = await choixFilmToAdd();
      addFilm(nouveauFilm);
    }
    if (promptChoix.choix === 4) {
      await removeFilm();
    }
    if (promptChoix.choix === 5) {
      requestDisplayCriterion();
    }
    if (promptChoix.choix === 9) {
      choisir = false;
    }
  }
}

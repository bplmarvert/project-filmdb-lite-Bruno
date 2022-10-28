import { addFilm } from "./addFilm.js";
import { choseFilmToAdd } from "./choseFilmToAdd.js";
import { listFilms } from "./listFilms.js";
import displayAFilm from "./displayAFilm.js";
import removeFilm from "./removeFilm.js";
import requestDisplayCriterion from "./requestDisplayCriterion.js";
import chalk from "chalk";
import prompts from "prompts";
import { createInitialFile } from "./createInitialFile.js";

export default async function menu() {
  let choice = true;
  console.clear();
  createInitialFile();
  while (choice === true) {
    console.log(chalk.blue("Que voulez vous faire ?"));
    console.log(
      chalk.blue(
        "\n \
        1) Afficher la liste simplifiée des films \n \
        2) Afficher les détails d'un film \n \
        3) Ajouter un film \n \
        4) Retirer un film \n \
        5) Afficher les films répondant à un critère \n \
        9) Quitter \n \n"
      )
    );

    const promptChoice = await prompts({
      type: "number",
      name: "optionChosen",
      message: "Veuillez saisir le no de l'option choisie ?",
    });

    if (promptChoice.optionChosen === 1) {
      listFilms();
    }
    if (promptChoice.optionChosen === 2) {
      await displayAFilm();
    }
    if (promptChoice.optionChosen === 3) {
      let nouveauFilm = await choseFilmToAdd();
      addFilm(nouveauFilm);
    }
    if (promptChoice.optionChosen === 4) {
      await removeFilm();
    }
    if (promptChoice.optionChosen === 5) {
      await requestDisplayCriterion();
    }
    if (promptChoice.optionChosen === 9) {
      choice = false;
    }
  }
}

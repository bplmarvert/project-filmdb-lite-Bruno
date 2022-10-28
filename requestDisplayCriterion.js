import fs from "fs";
import chalk from "chalk";
import prompts from "prompts";

export default async function requestDisplayCriterion() {
  // fonction à décomposer
  console.log(chalk.blue("Suivant quel critère voulez vous filtrer le film ?"));
  console.log(chalk.grey(" 1) nom: \n 2) annee \n 3) genre \n 4) realisateur"));

  const promptCriterion = await prompts([
    {
      type: "number",
      name: "critereNumber",
      message: "Veuillez saisir le no correspondant",
    },
    {
      type: "text",
      name: "criterionValue",
      message: "Veuillez saisir son intitulé",
    },
  ]);

  let filmsFiltered = {};
  let fichier = fs.readFileSync("listeFilms.json", "utf-8");
  let theFilms = await JSON.parse(fichier);
  switch (promptCriterion.critereNumber) {
    case 1:
      filmsFiltered = theFilms.filter(
        (film) => film.nom === promptCriterion.criterionValue
      );
      break;
    case 2:
      filmsFiltered = theFilms.filter(
        (film) => film.annee === parseInt(promptCriterion.criterionValue)
      );
      break;
    case 3:
      filmsFiltered = theFilms.filter(
        (film) => film.genre === promptCriterion.criterionValue
      );
      break;
    case 4:
      filmsFiltered = theFilms.filter(
        (film) => film.realisateur === promptCriterion.criterionValue
      );
      break;
  }
  console.log("Vous avez " + filmsFiltered.length + " films :");
  for (let index = 0; index < filmsFiltered.length; index += 1) {
    console.log(
      filmsFiltered[index]["nom"],
      " ",
      filmsFiltered[index]["annee"],
      "\n"
    );
  }
}

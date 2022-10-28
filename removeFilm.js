import chalk from "chalk";
import prompts from "prompts";
import fs from "fs";

export default async function removeFilm() {
  console.log(chalk.red("Quel film voulez vous retirer ?"));

  const promptToDel = await prompts({
    type: "text",
    name: "filmName",
    message: "Quel film voulez vous retirer ?",
  });

  delFilm(promptToDel.filmName);
}

export function delFilm(filmName) {
  let fichier = fs.readFileSync("listeFilms.json", "utf-8");
  let lesFilms = JSON.parse(fichier);
  lesFilms = lesFilms.filter((film) => {
    if (film.nom === filmName) {
      return false;
    }
    return true;
  });
  fs.writeFileSync("listeFilms.json", JSON.stringify(lesFilms));
}

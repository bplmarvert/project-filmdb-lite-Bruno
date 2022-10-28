import chalk from "chalk";
import prompts from "prompts";
import fs from "fs";

export function addFilm(nouveauFilm) {
  let file = fs.readFileSync("listeFilms.json", "utf-8");
  let theFilms = JSON.parse(file);
  theFilms.push(nouveauFilm);
  fs.writeFileSync("listeFilms.json", JSON.stringify(theFilms));
}

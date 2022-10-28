import fs from "fs";

/* Creation du fichier de films initial */
export function listeFilms() {
  let lesFilms = fs.readFileSync("listeFilms.json", "utf-8");
  let LesFilmsAAfficher = JSON.parse(lesFilms);

  //console.log(LesFilmsAAfficher);
  console.log("Vous avez " + LesFilmsAAfficher.length + " films :");
  for (let index = 0; index < LesFilmsAAfficher.length; index += 1) {
    console.log(
      LesFilmsAAfficher[index]["nom"],
      " ",
      LesFilmsAAfficher[index]["annee"]
    );
  }
}

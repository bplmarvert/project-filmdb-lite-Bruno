import fs from "fs";

// affichage simplifié de la liste des films actuelle
export function listFilms() {
  let theFilms = fs.readFileSync("listeFilms.json", "utf-8");
  let moviesToDisplay = JSON.parse(theFilms);

  console.log("Vous avez " + moviesToDisplay.length + " films :");
  for (let index = 0; index < moviesToDisplay.length; index += 1) {
    console.log(
      moviesToDisplay[index]["nom"],
      " ",
      moviesToDisplay[index]["annee"]
    );
  }
  console.log("\n");
}

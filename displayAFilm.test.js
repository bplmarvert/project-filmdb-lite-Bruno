import fs from "fs";

function displayOneFilm(filmName) {
  let fichier = fs.readFileSync("listeFilms.json", "utf-8");
  let lesFilms = JSON.parse(fichier);
  for (let i = 0; i <= lesFilms.length; i += 1) {
    let film = lesFilms[i];
    if (film.nom === filmName) {
      return `\n \n Le film : ${film.nom} dans le genre : ${film.genre} est sorti en ${film.annee} \
        \n vous pouvez l'identifier par sa ${film.miniature} \
        \n il se trouve à ${film.emplacement} et a les acteurs ${film.acteurs[0].nom}. ${film.acteurs[0].prenom} 
        \n voici son synopsis : ${film.synopsis}\n \
        Son réalisateur est : ${film.realisateur}\n \n`;
    }
  }
}

let descriptionFilm = displayOneFilm("Les 101 Dalmatiens");
console.log("description = ", descriptionFilm);
/*
test("addFile", () => {
  expect(descriptionFilm.includes("synopsis")).toBe(true);
  expect(descriptionFilm.includes("Dalmatiens")).toBe(true);
  expect(descriptionFilm.includes("Disney")).toBe(true);
});*/

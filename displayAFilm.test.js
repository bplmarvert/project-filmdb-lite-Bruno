import fs from "fs";

function displayOneFilm(filmName) {
  let file = fs.readFileSync("listeFilms.json", "utf-8");
  let theFilms = JSON.parse(file);
  for (let i = 0; i <= theFilms.length; i += 1) {
    let film = theFilms[i];
    if (film.nom === filmName) {
      return `\n \n Le film : ${film.nom} dans le genre : ${film.genre} est sorti en ${film.annee} \
        \n vous pouvez l'identifier par sa ${film.miniature} \
        \n il se trouve à ${film.emplacement} et a les acteurs ${film.acteurs[0].nom}. ${film.acteurs[0].prenom} 
        \n voici son synopsis : ${film.synopsis}\n \
        Son réalisateur est : ${film.realisateur}\n \n`;
    }
  }
}

let descriptionFilm = displayOneFilm("les 101 dalmatiens");
//console.log("description = ", descriptionFilm);

test("addFile", () => {
  // pas un test standard, du à la demande de transformer le film en une chaine de caractère, demande mal comprise
  expect(descriptionFilm.includes("synopsis")).toBe(true);
  expect(descriptionFilm.includes("Dalmatiens")).toBe(true);
  expect(descriptionFilm.includes("Disney")).toBe(true);
});

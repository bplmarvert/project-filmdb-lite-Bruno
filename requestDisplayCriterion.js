export default async function requestDisplayCriterion() {
  console.log(
    chalk.bgBlue("Suivant quel critère voulez vous filtrer le film ?")
  );
  console.log(
    chalk.darkGrey(" 1) nom: \n 2) annee \n 3) genre \n 4) realisateur")
  );

  const promptCriterion = await prompts({
    type: "int",
    name: "critere",
    message: "Veuillez saisir le no correspondant",
  });
  //
  return promptCriterion.critere;
}

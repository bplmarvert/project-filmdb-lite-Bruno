#! /usr/bin/env node
//const { program } = require("commander");
import chalk from "chalk";
import prompts from "prompts";
import menu from "./menu.js";
import { createInitialFile } from "./createInitialFile.js";
import { listeFilms } from "./listeFilms.js";
import { addFilm } from "./addFilm.js";

async function app() {
  console.log(chalk.green("Bienvenue !"));
  createInitialFile();
  menu();
}

app();

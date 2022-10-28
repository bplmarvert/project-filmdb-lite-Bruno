#! /usr/bin/env node
import chalk from "chalk";
import menu from "./menu.js";
import { createInitialFile } from "./createInitialFile.js";

async function app() {
  console.log(chalk.green("Bienvenue !"));
  createInitialFile();
  menu();
}

app();

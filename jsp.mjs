#!/usr/bin/env node

import * as readline from "node:readline";
import _ from "lodash";

let script;
try {
  script = eval(process.argv[process.argv.length - 1]);
} catch (err) {
  showHelpAndExit();
}

const readJson = process.argv.includes("-j");
const readWhole = process.argv.includes("-s");

if (readJson && readWhole) {
  showHelpAndExit();
}

if (readJson) {
  const input = [];
  process.stdin
    .on("data", (data) => {
      input.push(data);
    })
    .on("close", () => {
      const bufferedInput = Buffer.concat(input).toString();
      console.log(script(JSON.parse(bufferedInput)));
    });
} else if (readWhole) {
  const input = [];
  process.stdin
    .on("data", (data) => {
      input.push(data);
    })
    .on("close", () => {
      const bufferedInput = Buffer.concat(input).toString();
      console.log(script(bufferedInput));
    });
} else {
  const rl = readline.createInterface({
    input: process.stdin,
  });

  rl.on("line", (line) => {
    console.log(script(line));
  });
}

function showHelpAndExit() {
  console.log(`Usage: jsp [options] <pipe function>

Options:

  -j : Parse input file as JSON
  -s : Read whole input as a single string

Pipe function should parse to a valid Javascript function.`);
  process.exit();
}

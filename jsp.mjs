#!/usr/bin/env node

import _ from "lodash";

let script;
try {
  script = eval(process.argv[process.argv.length - 1]);
} catch (err) {
  showHelpAndExit();
}

const useJson = process.argv.includes("-j");

const input = [];

process.stdin
  .on("data", (data) => {
    input.push(data);
  })
  .on("close", () => {
    const bufferedInput = Buffer.concat(input).toString();
    if (useJson) {
      console.log(script(JSON.parse(bufferedInput)));
    } else {
      console.log(script(bufferedInput));
    }
  });

function showHelpAndExit() {
  console.log(`Usage: jsp [options] <pipe function>

Options:

  -j : Parse input file as JSON

Pipe function should parse to a valid Javascript function.`);
  process.exit();
}

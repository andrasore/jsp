#!/usr/bin/env node

const script = eval(process.argv[process.argv.length - 1]);

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

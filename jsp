#!/usr/bin/env node

const script = eval(process.argv[2]);

const input = [];

process.stdin
  .on("data", (data) => {
    input.push(data);
  })
  .on("close", () => {
    const bufferedInput = Buffer.concat(input).toString();
    console.log(script(bufferedInput));
  });

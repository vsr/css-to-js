#!/usr/bin/env node

const minimist = require('minimist');
const fs = require('fs');

const { cssToJs } = require('./index');

const argv = minimist(process.argv.slice(2));

const HELP_TEXT = `CLI API:
css-to-js -i <input-file> -o <output-file>`;

if (argv.help) {
  console.log(HELP_TEXT);
  process.exit(0);
}
if (argv.i) {
  const inputFile = argv.i;
  const outputFile = argv.o;
  if (fs.existsSync(inputFile)) {
    const cssString = fs.readFileSync(inputFile).toString();
    const jsString = cssToJs(cssString);
    if (outputFile) {
      fs.writeFileSync(outputFile, jsString);
    } else {
      console.log(jsString);
    }
  } else {
    console.error(`Input file ${inputFile} does not exist.`);
    process.exit(1);
  }
} else {
  console.warn('Specify input css file with.');
  process.exit(1);
}

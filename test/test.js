const { cssToJs } = require('../index');
const fs = require('fs');
const path = require('path');

const styleFiles = [
  './test/styles/hello.css',
  './test/styles/pure-min.css',
  './test/styles/bootstrap.min.css',
  './test/styles/foundation.min.css',
  './test/styles/material-icons.min.css',
];

styleFiles.forEach(file => {
  const css = fs.readFileSync(file).toString();
  const jsFile = `./test/results/${path.basename(file, path.extname(file))}.js`;
  fs.writeFileSync(jsFile, cssToJs(css));
});

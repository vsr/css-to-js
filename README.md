# CSS to JS

This module converts CSS code to JS code, such that running the JS code in browser would apply the styles defined by the CSS code.

This is helpful when you can't or don't want to add or insert a `style` tag but would like to apply the styles.

## Install

```sh
npm i @vsr/css-to-js
```

## CLI

```sh
npx @vsr/css-to-js -i my-css-file.css -o css-embed.js
```

## API

```js
const fs = require('fs');
const { cssToJs } = require('@vsr/css-to-js');

const css = fs.readFileSync('./test/styles/pure-min.css').toString();
console.log(cssToJs(css));
```

## TODO

* ~~develop api~~
* write tests
* ~~develop script generator~~
* ~~develop cli interface~~

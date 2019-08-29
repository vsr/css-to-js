const { cssjs } = require('jotform-css.js');

const parseCss = cssText => new cssjs().parseCSS(cssText);

const mapRule = rule => {
  return `${rule.directive}: ${rule.value};`;
};

const generateRules = cssTree => {
  const cssRules = cssTree.map(node => {
    switch (node.type) {
      case 'media':
        return `${node.selector} { ${generateRules(node.subStyles).join(
          ' '
        )} }`;
      case 'keyframes':
        return node.styles ? node.styles : '';
      default:
        if (node.rules)
          return `${node.selector} { ${node.rules.map(mapRule).join('')} }`;
        else {
          console.warn('Node not processed', node);
          return '';
        }
    }
  });
  return cssRules;
};

const generateStyleJs = cssRules => {
  return `(function (){
  var el = document.createElement('style');
  el.setAttribute('type', 'text/css');
  document.head.appendChild(el);
  var sheet = el.sheet;
  function addRule(rule){
    try { sheet.insertRule(rule, sheet.rules.length); }
    catch (e) { console.warn('Error inserting rule', rule, e); }
  }
  ${cssRules
    .map(rule => `addRule('${rule.replace(/'/gim, "\\'")}');\n  `)
    .join('')}
})();
`;
};

const cssToJs = css => generateStyleJs(generateRules(parseCss(css)));

module.exports = {
  cssToJs,
};

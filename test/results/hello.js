(function (){
  var el = document.createElement('style');
  el.setAttribute('type', 'text/css');
  document.head.appendChild(el);
  var sheet = el.sheet;
  function addRule(rule){
    try { sheet.insertRule(rule, sheet.rules.length); }
    catch (e) { console.warn('Error inserting rule', rule, e); }
  }
  addRule('@media only screen and (max-width: 480px) { body { color: red; } h1 { color: blue; } }');
  addRule('@media (min-width: 576px) { .container { max-width: 540px; } }');
  addRule('@media (min-width: 768px) { .container { max-width: 720px; } }');
  addRule('@media (min-width: 992px) { .container { max-width: 960px; } }');
  addRule('@media (min-width: 1200px) { .container { max-width: 1140px; } }');
  
})();

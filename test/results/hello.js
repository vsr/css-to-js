(function (){
  var el = document.createElement('style');
  el.setAttribute('type', 'text/css');
  document.head.appendChild(el);
  var sheet = el.sheet;
  function addRule(rule){
    try { sheet.insertRule(rule, sheet.rules.length); }
    catch (e) { console.warn('Error inserting rule', rule, e); }
  }
  addRule('.container { width: 100%;padding-right: 15px;padding-left: 15px;margin-right: auto;margin-left: auto; }');
  addRule('@media (min-width:576px) { .container { max-width: 540px; } }');
  addRule('@media (min-width:768px) { .container { max-width: 720px; } }');
  addRule('@media (min-width:992px) { .container { max-width: 960px; } }');
  addRule('@media (min-width:1200px) { .container { max-width: 1140px; } }');
  addRule('.container-fluid { width: 100%;padding-right: 15px;padding-left: 15px;margin-right: auto;margin-left: auto; }');
  
})();

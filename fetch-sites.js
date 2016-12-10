const casper = require('casper').create();
const fs = require('fs');

const selectorKanttiini = ".siteorigin-widget-tinymce.textwidget";

casper.start('http://www.smarteat.fi/menu-pitskun-kanttiini/');

casper.waitForSelector(selectorKanttiini, function() {
  const html = this.getHTML(selectorKanttiini, true);
  fs.write("./crawled/kanttiini.html", html, 'w');
});

casper.run();
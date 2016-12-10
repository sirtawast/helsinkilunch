var casper = require('casper').create();
var fs = require('fs');

var urls = {
  "kanttiini": "http://www.smarteat.fi/menu-pitskun-kanttiini/",
  "variantti": "https://www.taitotalo.com/fi/ravintolat/lounaslistat/variantti-viikon-lounaslista/",
  // "factory": "http://www.smarteat.fi/menu-pitskun-kanttiini/",
  "blancco": "http://www.ravintolablancco.com/ravintolat/pitajanmaki/",
}

var date = new Date();
var yyyy = date.getYear();
var mm = date.getMonth().toString();;
var dd = date.getDay().toString();

if (mm.length < 1) {
  mm = "0" +  mm;
}

if (dd.length < 1) {
  dd = "0" +  dd;
}

var tasteParams = yyyy + "/" + mm + "/" + dd;
urls.taste = "http://www.sodexo.fi/ruokalistat/output/weekly_html/6095/"+tasteParams+"/fi";

const selectors = {
  kanttiini: ".siteorigin-widget-tinymce.textwidget",
  variantti: ".lunch-list",
}

// casper.thenOpen(urls.kanttiini);
// casper.waitForSelector(selectors.kanttiini, function() {
//   const html = this.getHTML(selectors.kanttiini, true);
//   fs.write("./crawled/kanttiini.html", html, 'w');
// });

casper.start(urls.variantti);
casper.waitForSelector(selectors.variantti, function() {
  const html = this.getHTML(selectors.variantti, true);
  fs.write("./crawled/variantti.html", html, 'w');
});

casper.run();
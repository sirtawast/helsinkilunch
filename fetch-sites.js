var casper = require('casper').create();
var fs = require('fs');

var urls = {
  kanttiini: "http://www.smarteat.fi/menu-pitskun-kanttiini/",
  variantti: "https://www.taitotalo.com/fi/ravintolat/lounaslistat/variantti-viikon-lounaslista/",
  blancco: "http://www.ravintolablancco.com/ravintolat/pitajanmaki/",
  // "factory": "http://www.smarteat.fi/menu-pitskun-kanttiini/",
}

var date = new Date();
var yyyy = new Date().getFullYear();
var mm = new Date().getMonth().toString();;
var dd = new Date().getDate().toString();

if (mm.length < 1) {
  mm = "0" +  mm;
}

if (dd.length < 1) {
  dd = "0" +  dd;
}

var tasteParams = yyyy + "/" + mm + "/" + dd;

urls.taste = "http://www.sodexo.fi/ruokalistat/output/weekly_html/6095/"+tasteParams+"/fi";

const selectors = {
  blancco: "",
  kanttiini: ".siteorigin-widget-tinymce.textwidget",
  variantti: ".lunch-list",
  taste: "h1",
}

// TODO: Make a map and loop these to keep DRY
casper.start(urls.kanttiini);
casper.waitForSelector(selectors.kanttiini, function() {
  const html = this.getHTML(selectors.kanttiini, true);
  fs.write("./static/crawled/kanttiini.html", html, 'w');
});

casper.thenOpen(urls.variantti);
casper.waitForSelector(selectors.variantti, function() {
  const html = this.getHTML(selectors.variantti, true);
  fs.write("./static/crawled/variantti.html", html, 'w');
});

// casper.thenOpen(urls.blancco);
// casper.waitForSelector(selectors.blancco, function() {
//   const html = this.getHTML(selectors.blancco, true);
//   fs.write("./static/crawled/blancco.html", html, 'w');
// });

casper.thenOpen(urls.taste);
casper.waitForSelector(selectors.taste, function() {
  var elements = this.getElementsInfo('table');
  fs.write("./static/crawled/taste.html", elements[0].html + elements[1].html, 'w');
});

casper.run();
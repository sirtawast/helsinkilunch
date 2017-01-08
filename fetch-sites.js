var casper = require('casper').create({
  pageSettings: {
    loadImages:  false,
    loadPlugins: false,
  }
});

var fs = require('fs');
var cwd = fs.workingDirectory;

var urls = {
  kanttiini: "http://www.smarteat.fi/menu-pitskun-kanttiini/",
  variantti: "https://www.taitotalo.com/fi/ravintolat/lounaslistat/variantti-viikon-lounaslista/",
  blancco: "http://www.ravintolablancco.com/lounaviikko/pitajanmaki/",
  factory: "http://www.ravintolafactory.com/lounasravintolat/ravintolat/helsinki-pitajanmaki/",
}

var date = new Date();
var yyyy = new Date().getFullYear();
var mm = String(parseInt(new Date().getMonth(), 10) + 1);
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
  blancco: ".entry-content",
  kanttiini: ".siteorigin-widget-tinymce.textwidget",
  variantti: ".lunch-list",
  taste: "h1",
  factory: '.post_content .col-xs-12',
}

// TODO: Make a map and loop these to keep DRY
casper.start(urls.kanttiini);
casper.waitForSelector(selectors.kanttiini, function() {
  const html = this.getHTML(selectors.kanttiini, true);
  fs.write(cwd + "/static/crawled/kanttiini.html", replaceAllTags(html), 'w');
  this.echo('Kanttiini OK');
});

casper.thenOpen(urls.variantti);
casper.waitForSelector(selectors.variantti, function() {
  const html = this.getHTML(selectors.variantti, true);
  fs.write(cwd + "/static/crawled/variantti.html", replaceAllTags(html), 'w');
  this.echo('Variantti OK');
});

casper.thenOpen(urls.blancco);
casper.waitForSelector(selectors.blancco, function() {
  const html = this.getHTML(selectors.blancco, true);
  fs.write(cwd + "/static/crawled/blancco.html", replaceAllTags(html), 'w');
  this.echo('Blancco OK');
});

casper.thenOpen(urls.factory);
casper.waitForSelector(selectors.factory, function() {
  const html = this.getHTML(selectors.factory, true);
  fs.write(cwd + "/static/crawled/factory.html", replaceAllTags(html), 'w');
  this.echo('Factory OK');
});

casper.thenOpen(urls.taste);
casper.waitForSelector(selectors.taste, function() {
  var elements = this.getElementsInfo('table');
  fs.write(cwd + "/static/crawled/taste.html", replaceAllTags(elements[0].html) + replaceAllTags(elements[1].html), 'w');
  this.echo('Taste OK');
});

casper.run(function(){
  this.echo('Crawling done!').exit();
});

var replaceAllTags = function(html) {
  var divOpen = "<div";
  var divClose = "</div>";

  var spanOpen = "<span";
  var spanClose = "</span>";

  return html = html
    .replace(/class\=/gi, 'removed\=')
    .replace(/style\=/gi, 'removed\=')
    //.replace(/<br(\s+)?(\/)?(\s+)?>/gi, '')
    .replace(/<h1/gi, divOpen).replace(/<\/h1>/gi, '')
    .replace(/<h2/gi, divOpen).replace(/<\/h2>/gi, divClose)
    .replace(/<h3/gi, divOpen).replace(/<\/h3>/gi, divClose)
    .replace(/<h4/gi, divOpen).replace(/<\/h4>/gi, divClose)
    .replace(/<h5/gi, divOpen).replace(/<\/h5>/gi, divClose)
    .replace(/<h6/gi, divOpen).replace(/<\/h6>/gi, divClose)
    .replace(/<table/gi, divOpen).replace(/<\/table>/gi, divClose)
    .replace(/<thead/gi, divOpen).replace(/<\/thead>/gi, divClose)
    .replace(/<tbody/gi, divOpen).replace(/<\/tbody>/gi, divClose)
    .replace(/<tfoot/gi, divOpen).replace(/<\/tfoot>/gi, divClose)
    .replace(/<td/gi, divOpen).replace(/<\/td>/gi, divClose)
    .replace(/<tr/gi, divOpen).replace(/<\/tr>/gi, divClose)
    .replace(/<th/gi, divOpen).replace(/<\/th>/gi, divClose)
    .replace(/<p/gi, divOpen).replace(/<\/p>/gi, divClose)
    .replace(/<ul/gi, divOpen).replace(/<\/ul>/gi, divClose)
    .replace(/<li/gi, divOpen).replace(/<\/li>/gi, divClose)
    .replace(/<b>/gi, spanOpen+">").replace(/<\/b>/gi, spanClose)
    .replace(/<i/gi, spanOpen).replace(/<\/i>/gi, spanClose)
    .replace(/<strong/gi, spanOpen).replace(/<\/strong>/gi, spanClose)
    .replace(/<em/gi, spanOpen).replace(/<\/em>/gi, spanClose)
}
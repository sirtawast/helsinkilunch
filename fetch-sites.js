var _ = require('lodash');
var fs = require('fs');
var fecha = require('fecha');

var utils = require('./lib/utils');
var mapping = require('./lib/mapping');
var map = require('lodash.map');


var restaurants = mapping.restaurants;
var cwd = fs.workingDirectory;

var casper = require('casper').create({
  pageSettings: {
    loadImages:  false,
    loadPlugins: false,
  }
});

casper.on('error', function(msg) {
  this.echo(msg);
  return true;
});

var sodexoParams = fecha.format(new Date(), "YYYY/MM/DD");
restaurants[4].url = "http://www.sodexo.fi/ruokalistat/output/weekly_html/6095/"+sodexoParams+"/fi";

var urls = map(restaurants, function(r) { return r.url; });
var i = 0;
casper.start().eachThen(urls, function(url) {
  this.thenOpen(url.data).then(function(res) {
    var selector = restaurants[i].selector;
    var slug = restaurants[i].slug;
    this.echo("Fetching " + slug + " using '" + selector +"'");
    this.waitForSelector(selector, function() {
      var html = this.getHTML(selector, true);
      if (slug === 'taste') {
        var elements = this.getElementsInfo('table');
        fs.write(cwd+"/static/crawled/" + slug + ".json", JSON.stringify({html: utils.replaceAllTags(elements[0].html) + utils.replaceAllTags(elements[1].html)}), 'w');
      } else {
        fs.write(cwd+"/static/crawled/" + slug + ".json", JSON.stringify({html: utils.replaceAllTags(html)}), 'w');
      }
      this.echo('OK');
      i++;
    });
  });
});

casper.run(function(){
  this.echo('Crawling done!').exit();
});
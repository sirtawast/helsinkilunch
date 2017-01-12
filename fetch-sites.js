var _ = require('lodash');
var fs = require('fs');
var fecha = require('fecha');

var utils = require('./lib/utils');
var mapping = require('./lib/mapping');

var restaurants = mapping.restaurants;
var cwd = fs.workingDirectory;

var casper = require('casper').create({
  pageSettings: {
    loadImages:  false,
    loadPlugins: false,
  }
});

var tasteParams = fecha.format(new Date(), "YYYY/MM/DD");
restaurants[4].url = "http://www.sodexo.fi/ruokalistat/output/weekly_html/6095/"+tasteParams+"/fi";

var urls = _.map(restaurants, function(r) { return r.url; });
var i = 0;

casper.start().eachThen(urls, function(url) {
  this.echo(url.data);
  this.thenOpen(url.data).then(function(res) {
    this.waitForSelector(restaurants[i].selector, function() {
      var html = this.getHTML(restaurants[i].selector, true);
      if (restaurants[i].slug === 'taste') {
        var elements = this.getElementsInfo('table');
        fs.write(cwd+"/static/crawled/"+restaurants[i].slug+".html", utils.replaceAllTags(elements[0].html) + utils.replaceAllTags(elements[1].html), 'w');
      } else {
        fs.write(cwd+"/static/crawled/"+restaurants[i].slug+".html", utils.replaceAllTags(html), 'w');
      }
      this.echo(restaurants[i].slug +' OK');
      i++;
    });
  });
});

casper.run(function(){
  this.echo('Crawling done!').exit();
});

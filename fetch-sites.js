var _ = require('lodash');
var fs = require('fs');
var fecha = require('fecha');
var Xray = require('x-ray');

var utils = require('./lib/utils');
var mapping = require('./lib/mapping');
var map = require('lodash.map');

const x = Xray({})

var restaurants = mapping.restaurants;
var cwd = fs.workingDirectory;

var sodexoParams = fecha.format(new Date(), "YYYY/MM/DD");
restaurants.pitajanmaki[4].url = "http://www.sodexo.fi/ruokalistat/output/weekly_html/6095/"+sodexoParams+"/fi";

const jsonPath = './static/crawled';

restaurants.pitajanmaki.forEach((r)=>{
  x(r.url, r.selector, [
    {
      content: r.content,
    },
  ]).write(`${jsonPath}/${r.slug}.json`);
});

restaurants.helsinki.forEach((r)=>{
  x(r.url, r.selector, [
    {
      content: r.content,
    },
  ]).write(`${jsonPath}/${r.slug}.json`);
});

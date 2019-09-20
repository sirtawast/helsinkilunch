var restaurants = [
  {
    url: "http://www.smarteat.fi/menu-pitskun-kanttiini/",
    slug: "kanttiini",
    selector: ".so-panel.widget.widget_sow-features",
  },
  {
    url: "https://www.taitotalo.com/fi/ravintolat/lounaslistat/variantti-viikon-lounaslista/",
    slug: "variantti",
    selector: ".lunch-list",
  },
  {
    url: "http://www.ravintolablancco.com/lounas-ravintolat/pitajanmaki/",
    slug: "blancco",
    selector: ".page-content",
  },
  {
    url:  "http://www.ravintolafactory.com/lounasravintolat/ravintolat/helsinki-pitajanmaki/",
    slug: "factory",
    selector: ".post_content .col-xs-12",
  },
  {
    url: "http://www.sodexo.fi/ruokalistat/output/weekly_html/6095/2017/01/01/fi",
    slug: "taste",
    selector: "h1",
  },
  {
    url: "https://www.taitotalo.com/fi/ravintolat/lounaslistat/talentti-viikon-lounaslista/",
    slug: "talentti",
    selector: ".lunch-list",
  },
]

module.exports = {
  restaurants: restaurants
}

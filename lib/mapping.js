var restaurants = [
  {
    url: "http://www.smarteat.fi/menu-pitskun-kanttiini/",
    slug: "kanttiini",
    selector: ".siteorigin-widget-tinymce.textwidget",
  },
  {
    url: "https://www.taitotalo.com/fi/ravintolat/lounaslistat/variantti-viikon-lounaslista/",
    slug: "variantti",
    selector: ".lunch-list",
  },
  {
    url: "http://www.ravintolablancco.com/lounaviikko/pitajanmaki/",
    slug: "blancco",
    selector: ".entry-content",
  },
  {
    url:  "http://www.ravintolafactory.com/lounasravintolat/ravintolat/helsinki-pitajanmaki",
    slug: "factory",
    selector: ".post_content .col-xs-12",
  },
  {
    url: "",
    slug: "taste",
    selector: "h1",
  }
]

module.exports = {
  restaurants: restaurants
}
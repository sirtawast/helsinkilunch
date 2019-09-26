const restaurants = {
  pitajanmaki: [
    {
      url: "http://www.smarteat.fi/menu-pitskun-kanttiini/",
      slug: "kanttiini",
      selector: ".so-panel.widget.widget_sow-features"
    },
    {
      url:
        "https://www.taitotalo.com/fi/ravintolat/lounaslistat/variantti-viikon-lounaslista/",
      slug: "variantti",
      selector: ".lunch-list"
    },
    {
      url: "http://www.ravintolablancco.com/lounas-ravintolat/pitajanmaki/",
      slug: "blancco",
      selector: ".page-content"
    },
    {
      url:
        "http://www.ravintolafactory.com/lounasravintolat/ravintolat/helsinki-pitajanmaki/",
      slug: "factory",
      selector: ".post_content .col-xs-12"
    },
    {
      url:
        "http://www.sodexo.fi/ruokalistat/output/weekly_html/6095/2017/01/01/fi",
      slug: "taste",
      selector: "h1"
    },
    {
      url:
        "https://www.taitotalo.com/fi/ravintolat/lounaslistat/talentti-viikon-lounaslista/",
      slug: "talentti",
      selector: ".lunch-list"
    }
  ],
  helsinki: [
    {
      url: "http://latva.fi/lounas/",
      slug: "latva",
      selector: ".entry-content"
    },
    {
      url: "http://www.latorre.fi/toimipiste/aleksanterinkatu/lounas/",
      slug: "latorrefazione",
      selector: "#lounas"
    },
    {
      url: "http://www.ravintolakarljohan.fi/lounas/",
      slug: "karljohan",
      selector: ".menu-wrap"
    },
    {
      url: "http://pompier.fi/albertinkatu/ruoka-juoma/",
      slug: "pompier",
      selector: ".albertinkatu-lounas"
    },
    {
      url: "http://lonkka.fi/ruoka/",
      slug: "lonkka",
      selector: ".food-columns:nth-of-type(2)"
    }
  ],
  vallila: [
    {
      name: "africanpots",
      url: 'https://www.africanpots.fi/',
      selector: ".row.sqs-row",
      content: ".col.sqs-col-6.span-6:nth-of-type(1) | sanitize",
      slug: "africanpots"
    },
    {
      name: "alice",
      url: 'https://www.aliceitalian.fi/lounas',
      selector: "#comp-k0qgtauiinlineContent-gridContainer",
      content: ".txtNew:last-child | sanitize",
      slug: "alice"
    },
    {
      name: "rocks",
      url: 'https://www.rockskallio.fi/lounas/',
      selector: ".entry-content",
      content: ".elementor-text-editor | sanitize",
      slug: "rocks"
    },
    {
      name: "sture4",
      url: 'https://www.sture4.fi/lounas',
      selector: ".wpb_wrapper.tabbed",
      content: [".wpb_tab | sanitize"],
      slug: "sture4"
    },
    {
      name: "rupla",
      url: 'http://rupla.fi/cafe/',
      selector: ".dslc-modules-section:nth-of-type(3)",
      content: ".dslc-text-module-content div | sanitize",
      slug: "rupla"
    },
    {
      name: "harju8",
      url: 'https://www.facebook.com/Harju8',
      selector: "#PagesProfileHomePrimaryColumnPagelet",
      content: '[data-testid="post_message"] | sanitize',
      slug: "harju8"
    },
    {
      name: "kellohalli",
      url: 'https://kellohalli.fi/ravintola',
      selector: "main",
      content: ".lunch-menu | sanitize",
      slug: "kellohalli"
    },
    {
      name: "antell-galleria",
      url: 'http://galleria.antell.fi',
      selector: ".post-entry",
      content: [".av_one_third | sanitize"],
      slug: "antell-galleria"
    }
  ]
};

module.exports = {
  restaurants: restaurants
};

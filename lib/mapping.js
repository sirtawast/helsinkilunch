const restaurants = {
  pitajanmaki: [
    {
      url: "http://www.smarteat.fi/menu-pitskun-kanttiini/",
      slug: "kanttiini",
      content: ".so-panel.widget.widget_sow-features",
      selector: 'body'
    },
    {
      url:
        "https://www.taitotalo.com/fi/ravintolat/lounaslistat/variantti-viikon-lounaslista/",
      slug: "variantti",
      content: ".lunch-list",
      selector: 'body'
    },
    {
      url: "http://www.ravintolablancco.com/lounas-ravintolat/pitajanmaki/",
      slug: "blancco",
      content: ".page-content",
      selector: 'body'
    },
    {
      url:
        "http://www.ravintolafactory.com/lounasravintolat/ravintolat/helsinki-pitajanmaki/",
      slug: "factory",
      content: ".post_content .col-xs-12",
      selector: 'body'
    },
    {
      url:
        "http://www.sodexo.fi/ruokalistat/output/weekly_html/6095/2017/01/01/fi",
      slug: "taste",
      content: "h1",
      selector: 'body'
    },
    {
      url:
        "https://www.taitotalo.com/fi/ravintolat/lounaslistat/talentti-viikon-lounaslista/",
      slug: "talentti",
      content: ".lunch-list",
      selector: 'body'
    }
  ],
  helsinki: [
    {
      url: "http://latva.fi/lounas/",
      slug: "latva",
      selector: 'body',
      content: ".entry-content"
    },
    {
      url: "http://www.latorre.fi/toimipiste/aleksanterinkatu/lounas/",
      slug: "latorrefazione",
      selector: 'body',
      content: "#lounas"
    },
    {
      url: "http://www.ravintolakarljohan.fi/lounas/",
      slug: "karljohan",
      selector: 'body',
      content: ".menu-wrap"
    },
    {
      url: "http://pompier.fi/albertinkatu/ruoka-juoma/",
      slug: "pompier",
      selector: 'body',
      content: ".albertinkatu-lounas"
    },
    {
      url: "http://lonkka.fi/ruoka/",
      slug: "lonkka",
      selector: 'body',
      content: ".food-columns:nth-of-type(2)"
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

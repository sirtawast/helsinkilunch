const restaurants = [
  {
    url: 'http://www.smarteat.fi/menu-pitskun-kanttiini/',
    slug: 'kanttiini',
    selector: '.so-panel.widget.widget_sow-features',
  },
  {
    url:
      'https://www.taitotalo.com/fi/ravintolat/lounaslistat/variantti-viikon-lounaslista/',
    slug: 'variantti',
    selector: '.lunch-list',
  },
  {
    url: 'http://www.ravintolablancco.com/lounas-ravintolat/pitajanmaki/',
    slug: 'blancco',
    selector: '.page-content',
  },
  {
    url:
      'http://www.ravintolafactory.com/lounasravintolat/ravintolat/helsinki-pitajanmaki/',
    slug: 'factory',
    selector: '.post_content .col-xs-12',
  },
  {
    url:
      'http://www.sodexo.fi/ruokalistat/output/weekly_html/6095/2017/01/01/fi',
    slug: 'taste',
    selector: 'h1',
  },
  {
    url:
      'https://www.taitotalo.com/fi/ravintolat/lounaslistat/talentti-viikon-lounaslista/',
    slug: 'talentti',
    selector: '.lunch-list',
  },
  {
    url: 'http://latva.fi/lounas/',
    slug: 'latva',
    selector: '.entry-content',
  },
  {
    url: 'http://www.latorre.fi/toimipiste/aleksanterinkatu/lounas/',
    slug: 'latorrefazione',
    selector: '#lounas',
  },
  {
    url: 'http://www.ravintolakarljohan.fi/lounas/',
    slug: 'karljohan',
    selector: '.menu-wrap',
  },
  {
    url: 'http://pompier.fi/albertinkatu/ruoka-juoma/',
    slug: 'pompier',
    selector: '.albertinkatu-lounas',
  },
  {
    url: 'http://lonkka.fi/ruoka/',
    slug: 'lonkka',
    selector: '.food-columns:nth-of-type(2)',
  },
];

const fromMenu = [
  {
    name: 'Istanbul Grilli',
  },
  {
    name: 'Sushibar+Wine',
  },
  {
    name: 'Friends & Burgers',
  },
  {
    name: 'Nasty Burger',
  },
  {
    name: 'Harju Döner City',
  },
  {
    name: 'Pikku-Nepal',
  },
  {
    name: 'Teatteri',
  },
  {
    name: 'Tortilla House',
  },
  {
    name: '6k Food Market, Kamppi',
  },
  {
    name: 'Hoku Kamppi',
  },
  {
    name: 'Fuku',
  },
  {
    name: 'Domo',
  },
  {
    name: 'Koto',
  },
  {
    name: 'Bastardo',
  },
  {
    name: 'Beijing8',
  },
  {
    name: 'That dumpling place on Pikku-Roba',
  },
  {
    name: 'Sandro',
  },
  {
    name: 'New Bamboo Center',
  },
  {
    name: 'Bar 9',
  },
  {
    name: 'Pjazza',
  },
  {
    name: 'Hesburger',
  },
  {
    name: 'Burger King',
  },
  {
    name: 'Eerikin Pippuri',
  },
  {
    name: 'Rulla',
  },
  {
    name: 'Samrat',
  },
  {
    name: 'Skiffer',
  },
  {
    name: 'Trocadero',
  },
  {
    name: 'Pobre',
  },
  {
    name: 'Fafas',
  },
  {
    name: 'Tamarin',
  },
  {
    name: 'Thai Orchid Kamppi',
  },
  {
    name: 'Levant',
  },
  {
    name: 'Ravintola Bröd',
  },
  {
    name: 'Kantipur',
  },
  {
    name: 'The Red Koi Thai',
  },
  {
    name: 'Pizzarium',
  },
  {
    name: 'Shanghai Cowboy',
  },
  {
    name: 'Hanko Sushi',
  },
  {
    name: 'some chinese restaurant',
  },
  {
    name: "Luckiefun's",
  },
  {
    name: 'Social Burgerjoint',
  },
  {
    name: 'Döner Harju',
  },
  {
    name: 'No Pizza',
  },
  {
    name: 'Pupu',
  },
  {
    name: "Na'am Kitchen",
  },
  {
    name: 'Döner Harju',
  },
  {
    name: 'Bangkok 9',
  },
  {
    name: 'Peace & Love',
  },
  {
    name: 'Fat Ramen',
  },
  {
    name: 'Sumo',
  },
];

module.exports = {
  restaurants: restaurants,
  fromMenu: fromMenu,
};

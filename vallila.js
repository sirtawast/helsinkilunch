const Xray = require('x-ray');
const x = Xray({
  filters: {
    sanitize: value => {
      return value
        .replace(/(maanantai)/i, '<p><strong>Maanantai</strong></p>')
        .replace(/(tiistai)/i, '<p><strong>Tiistai</strong></p>')
        .replace(/(keskiviikko)/i, '<p><strong>Keskiviikko</strong></p>')
        .replace(/(torstai)/i, '<p><strong>Torstai</strong></p>')
        .replace(/(perjantai)/i, '<p><strong>Perjantai</strong></p>')
        .replace(/(lauantai)/i, '<p><strong>Lauantai</strong></p>')
        .replace(/Ma\s/, '<p><strong>Maanantai</strong></p>')
        .replace(/Ti\s/, '<p><strong>Tiistai</strong></p>')
        .replace(/Ke\s/, '<p><strong>Keskiviikko</strong></p>')
        .replace(/To\s/, '<p><strong>Torstai</strong></p>')
        .replace(/Pe\s/, '<p><strong>Perjantai</strong></p>')
        .replace(/La\s/, '<p><strong>Lauantai</strong></p>')
        .replace(/(Lounasravintola Hella)/, '<p><strong>$1</strong></p>')
        .replace(/(Kauppakahvila Tori)/, '<p><strong>$1</strong></p>')
        .replace(/(Delikahvila Pannu)/, '<p><strong>$1</strong></p>')
        .replace(/(Teemaravintola Paja)/, '<p><strong>$1</strong></p>')
        .replace(/(Grilliravintola Hiili)/, '<p><strong>$1</strong></p>')
        .replace(/(Edustuslounas)/, '<p><strong>$1</strong></p>')
        .replace(/(Kahvila Vääksy)/, '<p><strong>$1</strong></p>')
        .replace(/(Kasvisravintola Kranssi)/, '<p><strong>$1</strong></p>');
    },
  },
});

const jsonPath = './static/crawled';

x('https://www.africanpots.fi/', '.row.sqs-row', [
  {
    content: '.col.sqs-col-6.span-6:nth-of-type(1) | sanitize',
  },
]).write(`${jsonPath}/africanpots.json`);

x(
  'https://www.aliceitalian.fi/lounas',
  '#comp-k0qgtauiinlineContent-gridContainer ',
  [
    {
      content: '.txtNew:last-child | sanitize',
    },
  ],
).write(`${jsonPath}/alice.json`);

x('https://www.rockskallio.fi/lounas/', '.entry-content', [
  {
    content: '.elementor-text-editor | sanitize',
  },
]).write(`${jsonPath}/rocks.json`);

x('https://www.sture4.fi/lounas', '.wpb_wrapper.tabbed', [
  {
    content: ['.wpb_tab | sanitize'],
  },
]).write(`${jsonPath}/sture4.json`);

x('http://rupla.fi/cafe/', '.dslc-modules-section:nth-of-type(3) ', [
  {
    content: '.dslc-text-module-content div | sanitize',
  },
]).write(`${jsonPath}/rupla.json`);

x('https://www.facebook.com/Harju8', '#PagesProfileHomePrimaryColumnPagelet ', [
  {
    content: '[data-testid="post_message"] | sanitize',
  },
]).write(`${jsonPath}/harju8.json`);

x('https://www.antell.fi/vaaksy/', '.lunch-menu-days', [
  {
    content: '.lunch-menu-language | sanitize',
  },
]).write(`${jsonPath}/antell-vaaksy.json`);

x('https://kellohalli.fi/ravintola', 'main', [
  {
    content: '.lunch-menu | sanitize',
  },
]).write(`${jsonPath}/kellohalli.json`);

x('http://galleria.antell.fi', '.post-entry', [
  {
    content: ['.av_one_third | sanitize'],
  },
]).write(`${jsonPath}/antell-galleria.json`);

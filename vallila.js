const Xray = require('x-ray');
const mapping = require('./lib/mapping');

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

mapping.restaurants.vallila.forEach((r)=>{
  x(r.url, r.selector, [
    {
      content: r.content,
    },
  ]).write(`${jsonPath}/${r.slug}.json`);
});

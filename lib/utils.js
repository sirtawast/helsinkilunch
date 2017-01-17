var $ = require('jquery');

var replaceAllTags = function(html) {
  var divOpen = "<div";
  var divClose = "</div>";

  var spanOpen = "<span";
  var spanClose = "</span>";

  return html = html
    .replace(/class\=/gi, 'removed\=')
    .replace(/style\=/gi, 'removed\=')
    //.replace(/<br(\s+)?(\/)?(\s+)?>/gi, '')
    .replace(/<h1/gi, divOpen).replace(/<\/h1>/gi, divClose)
    .replace(/<h2/gi, divOpen).replace(/<\/h2>/gi, divClose)
    .replace(/<h3/gi, divOpen).replace(/<\/h3>/gi, divClose)
    .replace(/<h4/gi, divOpen).replace(/<\/h4>/gi, divClose)
    .replace(/<h5/gi, divOpen).replace(/<\/h5>/gi, divClose)
    .replace(/<h6/gi, divOpen).replace(/<\/h6>/gi, divClose)
    .replace(/<table/gi, divOpen).replace(/<\/table>/gi, divClose)
    .replace(/<thead/gi, divOpen).replace(/<\/thead>/gi, divClose)
    .replace(/<tbody/gi, divOpen).replace(/<\/tbody>/gi, divClose)
    .replace(/<tfoot/gi, divOpen).replace(/<\/tfoot>/gi, divClose)
    .replace(/<td/gi, divOpen).replace(/<\/td>/gi, divClose)
    .replace(/<tr/gi, divOpen).replace(/<\/tr>/gi, divClose)
    .replace(/<th/gi, divOpen).replace(/<\/th>/gi, divClose)
    .replace(/<p/gi, divOpen).replace(/<\/p>/gi, divClose)
    .replace(/<ul/gi, divOpen).replace(/<\/ul>/gi, divClose)
    .replace(/<li/gi, divOpen).replace(/<\/li>/gi, divClose)
    .replace(/<b>/gi, spanOpen+">").replace(/<\/b>/gi, spanClose)
    .replace(/<i/gi, spanOpen).replace(/<\/i>/gi, spanClose)
    .replace(/<strong/gi, spanOpen).replace(/<\/strong>/gi, spanClose)
    .replace(/<em/gi, spanOpen).replace(/<\/em>/gi, spanClose)
}

var removeEmptyDivs = function(html) {
  var $html = $(html);
  $html.find('div').each(function(i,o) {
    var $elem = $(o);
    $elem.removeAttr('removed');
    if ($elem.html().replace(/\s+?\r?\n/g, '').trim().length === 0) {
      $elem.remove();
    };
  });
  // return wrapDivs($html.html());
  // console.log($html.html());
  wrapDivs($html);
  return $html.html();
}

var wrapDivs = function($html) {
  console.log($html.html());
  var days = ['Maanantai', 'Tiistai', 'Keskiviikko', 'Torstai', 'Perjantai'];

    days.forEach(function(d, i) {
      var $elements = $('<div id="'+ d +'"></div>');
      var $day = $html.find('div:contains("'+ d +'"), span:contains("'+ d +'")');
      $target = $day.next('div');
      while($target && $target.length > 0 && !$target.html().indexOf(days[i+1]) >= 0) {
        console.log($target.html().toString());
        console.log($elements.html());

        $elements.append($target.clone());
        if ($target.next('div')) {
          $target = $target.next('div');
        }
      }

      console.log("############");
    });
    return $html.html();
}

module.exports = {
  replaceAllTags: replaceAllTags,
  removeEmptyDivs: removeEmptyDivs,
}

// http://jsbin.com/yemaceyige/edit?html,css,js,console,output
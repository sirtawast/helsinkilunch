var replaceAllTags = function(html) {
  var divOpen = "<div";
  var divClose = "</div>";

  var spanOpen = "<span";
  var spanClose = "</span>";

  return html = html
    .replace(/class\=/gi, 'removed\=')
    .replace(/style\=/gi, 'removed\=')
    //.replace(/<br(\s+)?(\/)?(\s+)?>/gi, '')
    .replace(/<iframe/gi, divOpen).replace(/<\/iframe>/gi, divClose)
    .replace(/<script/gi, '<noscript').replace(/<\/script>/gi, '</noscript>')
    .replace(/<object/gi, '<noscript').replace(/<\/object>/gi, '</noscript>')
    .replace(/<video/gi, '<noscript').replace(/<\/video>/gi, '</noscript>')
    .replace(/<audio/gi, '<noscript').replace(/<\/audio>/gi, '</noscript>')
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

module.exports = {
    replaceAllTags: replaceAllTags,
}
import get from 'lodash.get';

const sanitizeTxt = (str) => {
  const dayInt = new Date().getDay();
  const days = {1:"Maanantai",2:"Tiistai",3:"Keskiviikko",4:"Torstai",5:"Perjantai",6:"Lauantai"}

  const daysRe = new RegExp(days[dayInt], 'i')

  const splitStr = str.split(daysRe); // Split to past and present, get rid of past
  str = get(splitStr, "[1]")
    ? `<p><strong>${days[dayInt]}</strong></p>${splitStr[1]}` 
    : str;

  return str
    .replace(/\d+\.\d+\.?/g, "")
    .replace(/(\d)\s+€/g, "$1€")
    .replace(/€([A-Za-z])/g, "€<br>$1")
    .replace(/\d+\.\d+\.?/g, "")
    .replace(/\s+–\s+/g, "<br>")
    .replace(/\)\s?([A-Z])/g, ")<br>$1")
    .replace(/\n\n+/g, "<br>")
    .replace(/\)\s+?([A-Z])/g, ")<br>$1")
    .replace(/\s\s+/g, " ")
    .replace(/(<br>\n?)+/g, "<br>")
    .replace(/(<br>\s?<br>)+/g, "<br>")
    .replace(/(<\/p>\s+?<br>\s+?\n?)/g, "</p>");
}

export {
  sanitizeTxt
}
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js')
    .then((registration) => {
      // Registration OK!
    }).catch(console.error);
}

$(document).ready(() => {
  const restaurants = ['taste', 'valimotie9', 'variantti', 'kanttiini', 'blancco', 'factory']

  const days = [
  	{name: "Maanantai"},
  	{name: "Tiistai"},
  	{name: "Keskiviikko"},
  	{name: "Torstai"},
  	{name: "Perjantai"},
  ]

  restaurants.forEach((r) => {
    fetch(`/crawled/${r}.html`, {
      type: 'get',
    }).then((res) => res.text()).then((res) => {
      $(`#${r}`).html(`<div class="float-sm-left">${res}</div`);
      const number = Math.floor(Math.random()*(10-1+1)+1);
      $(`#${r}`).append(`<img class="float-sm-right" src="http://lorempixel.com/200/200/food/${number}/">`)
    });

    days.forEach((o) => {
      const re = new RegExp(o.name, "gi");
      const content = $('.tab-content').html();
      console.log(content);
      $('.tab-content').html($('.tab-content').html().replace(re, `<div class="day">${o.name}</div>`));
    });

  })
});
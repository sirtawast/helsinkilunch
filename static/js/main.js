$(document).ready(() => {

  const restaurants = ['taste', 'variantti', 'kanttiini', 'blancco', 'factory']

  const days = [
  	{name: "Maanantai"},
  	{name: "Tiistai"},
  	{name: "Keskiviikko"},
  	{name: "Torstai"},
  	{name: "Perjantai"},
  ]

  restaurants.forEach((r) => {
    $.ajax({
      url: `/crawled/${r}.html`,
      type: 'get',
    }).done((res) => {
      $(`#${r}`).html(`<div class="float-sm-left">${res}</div`);

      var number = Math.floor(Math.random()*(10-1+1)+1);
      $(`#${r}`).append(`<img class="float-sm-right" src="http://lorempixel.com/200/200/food/${number}/">`)

      days.forEach((o) => {
  		  var re = new RegExp(o.name, "gi");
	  	  $('.tab-content').html($('.tab-content').html().replace(re, `<div class="day">${o.name}</div>`));
      });
    });
  })


});
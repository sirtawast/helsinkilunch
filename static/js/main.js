$(document).ready(() => {

  const restaurants = ['taste', 'variantti', 'kanttiini', 'blancco', 'factory']

  const days = [
  	{name: "Maanantai"},
  	{name: "Tiistai"},
  	{name: "Keskiviikko"},
  	{name: "Torstai"},
  	{name: "Perjantai"},
  ]

  restaurants.forEach((o) => {
    $.ajax({
      url: `/crawled/${o}.html`,
      type: 'get',
    }).done((res) => {
      $(`#${o}`).html(res);

      http://lorempixel.com/400/200/food/10/

      days.forEach((o) => {
  		  var re = new RegExp(o.name, "gi");
	  	  $('.tab-content').html($('.tab-content').html().replace(re, `<div class="day">${o.name}</div>`));
      });
    });
  })


});
$(document).ready(() => {

  const restaurants = ['taste', 'variantti', 'kanttiini']

  restaurants.forEach((o) => {
    $.ajax({
      url: `/crawled/${o}.html`,
      type: 'get',
    }).done((res) => {
      $(`#${o}`).html(res);
    });
  })

});
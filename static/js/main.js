$(document).ready(() => {

  const maps = ['taste', 'variantti', 'kanttiini']


  maps.forEach((o) => {
    $.ajax({
      url: `/crawled/${o}.html`,
      type: 'get',
    }).done((res) => {
      $(`#${o}`).html(res);
    });
  })


  // $.ajax({
  //   url: '/crawled/variantti.html',
  //   type: 'get',
  // }).done(function(res){
  //   $('#variantti').html(res.data);
  // });

  // $.ajax({
  //   url: '/crawled/kanttiini.html',
  //   type: 'get',
  // }).done(function(res){
  //   $('#kanttiini')[0].innerHTML = res;
  // });

});
const $ = window.$;

$.get('https://swapi-api.hbtn.io/api/films/?format=json', (d) => {
  d.results.forEach(result => {
    $('<li>' + result.title + '</li>').appendTo('UL#list_movies');
  });
});

const $ = window.$;

$.get('https://swapi-api.hbtn.io/api/people/5/?format=json', (d) => {
  $('DIV#character').text(d.name);
});

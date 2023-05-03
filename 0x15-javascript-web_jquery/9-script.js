const $ = window.$;

$(document).ready(
  $.get('https://fourtonfish.com/hellosalut/?lang=fr', (d) => {
    $('DIV#hello').text(d.hello);
  }));

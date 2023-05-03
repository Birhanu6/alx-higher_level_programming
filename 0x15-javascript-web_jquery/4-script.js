const $ = window.$;
const h = $('HEADER');

$(document).ready($('DIV#toggle_header').click(() => {
  if (h.hasClass('green')) {
    h.removeClass('green');
    h.addClass('red');
  } else {
    h.removeClass('red');
    h.addClass('green');
  }
}));

const $ = window.$;

$(document).ready($('#update_header').click(() => {
  $('HEADER').text('New Header!!!');
}));

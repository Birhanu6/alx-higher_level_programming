const $ = window.$;

$(document).ready($('DIV#add_item').click(() => {
  $('<li>Item</li>').appendTo('UL.my_list');
}));

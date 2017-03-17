$(document).ready(function($) {
  var listItems = $("#work ul li");
  listItems.each(function(i, li) {
    var colors = ["#EF476F","#FFD166","#00cc99","#118AB2","#073B4C"]
    $(li).css('background-color', colors[i])
  });
});

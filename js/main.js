$(document).ready(function($) {
  $(".dropdown").toggle();

  $("#work li").on( "click", function() {
    $(".dropdown").hide();
    $(this).find(".dropdown").toggle();
  });

  var listItems = $("#work ul li");
  listItems.each(function(i, li) {
    var colors = ["#EF476F","#FFD166","#00cc99","#118AB2","#073B4C","#EE6055"]
    $(li).css('background-color', colors[i])
  });
});

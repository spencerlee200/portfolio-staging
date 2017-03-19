$(document).ready(function($) {
  $(".dropdown").toggle();

  $("#work li").on( "click", function() {
    //Debate on showing multiple at once
    //$(".dropdown").hide();
    $(this).find(".dropdown").toggle();
  });

  var listItems = $("#work ul li");
  listItems.each(function(i, li) {
    //var colors = ["#EF476F","#FF8C61","#FFD166","#00cc99","#118AB2","#073B4C","#EE6055"];
    var gradients = ["linear-gradient(to left, #EB3349 , #F45C43)",
                     "linear-gradient(5deg, #036564, #033649)",
                     "linear-gradient(to bottom, #C1EBE1, #93B4AC)",
                     "linear-gradient(to left, #FF512F , #F09819)",
                     "linear-gradient(to left, #00d2ff , #3a7bd5)",
                     "linear-gradient(to left, #ADD100 , #7B920A)",
                     "linear-gradient(to right, #f6d365 0%, #fda085 51%, #f6d365 100%)"
                   ];
    $(li).css('background', gradients[i])
  });
});

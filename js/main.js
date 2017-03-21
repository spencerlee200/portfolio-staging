$(document).ready(function($) {
  var listItems = $("#work ul li");
  listItems.each(function(i, li) {
    //var colors = ["#EF476F","#FF8C61","#FFD166","#00cc99","#118AB2","#073B4C","#EE6055"];
    var gradients = ["linear-gradient(to left, #F09819 , #EDDE5D)",
                     "linear-gradient(5deg, #036564, #033649)",
                     "linear-gradient(to left, #00d2ff , #3a7bd5)",
                     "linear-gradient(to left, #EB3349 , #F45C43)",
                     "linear-gradient(to left, #FF512F , #F09819)",
                     "linear-gradient(to left, #ADD100 , #7B920A)",
                     "linear-gradient(to left, #EC6F66 , #F3A183)"
                   ];
    $(li).css('background', gradients[i])
  });
});

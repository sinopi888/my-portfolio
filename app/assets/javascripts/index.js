$(document).ready(function() {
  $(".fadeto").mouseover(function() {
    $(this).fadeTo("slow", 0.2);
  });
  $(".fadeto").mouseout(function(){
    $(this).fadeTo("slow", 1.0);
  });
});
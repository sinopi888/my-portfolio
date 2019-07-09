$(document).ready(function() {
  $("#email").mouseover(function() {
    $(this).css("color", "rgba(37, 37, 131, 0.781)");
  });
  $("#email").mouseover(function() {
    $(this).fadeTo("slow", 1.0);
  });
  $("#email").mouseout(function(){
    $(this).fadeTo("slow", 0.4);
  });
});

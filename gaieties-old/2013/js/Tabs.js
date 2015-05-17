$(document).ready(function() {
  $("#page-about").hide();
  $("#page-caststaff").hide();

  $("#nav-about").click(function() {
    $("#page-home").hide();
    $("#page-caststaff").hide();
    $("#page-about").show();
  });  

  $("#nav-caststaff").click(function(){
    $("#page-home").hide();
    $("#page-about").hide();
    $("#page-caststaff").show();
  });

  $("#nav-home").click(function(){
    $("#page-about").hide();
    $("#page-caststaff").hide();
    $("#page-home").show();
  });


});
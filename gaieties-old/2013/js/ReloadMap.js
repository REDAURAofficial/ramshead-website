function reloadMap (){ 
    var f = document.getElementById("map"); 
    if (f != null) 
      f.src=f.src; 
    } 
    $(document).ready(function(){ 
      reloadMap(); 
    }); 
    $("#nav-about").click(function() {
      reloadMap();
    });
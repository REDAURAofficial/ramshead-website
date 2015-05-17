<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<html>
<head>
  <title>Gaieties 2010</title>
   <script src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
  <script src="scripts/mootools-1.2.1-core-yc.js" type="text/javascript"></script>
 <script src="scripts/mootools-1.2-more.js" type="text/javascript"></script>
 <script src="scripts/jd.gallery.js" type="text/javascript"></script>  
<link rel="stylesheet" href="css/jd.gallery.css" type="text/css" media="screen" />
  <link rel="stylesheet" href="style.css" type="text/css" />

<style>
#header {
  position: absolute;
}
</style>

</head>

<body>

<script type="text/javascript">
function startGallery() {
var myGallery = new gallery($('myGallery'), {
timed: true,
useThumbGenerator: true,
showInfopane: false,
showCarousel: false,
embedLinks: false,
useReMooz: false
});
}
window.addEvent('domready', startGallery);
</script>


<?php
include("header.php");
?>

<div id="content">

<div id="myGallery">
<div class="imageElement">
<img src="images/poster.jpg" class="full" />
</div>
<div class="imageElement">
<img src="images/1.jpg" class="full"/>
</div>
<div class="imageElement">
<img src="images/2.jpg" class="full" />
</div>
<div class="imageElement">
<img src="images/4.jpg" class="full" />
</div>
<div class="imageElement">
<img src="images/5.jpg" class="full" />
</div>
<div class="imageElement">
<img src="images/6.jpg" class="full" />
</div>
<div class="imageElement">
<img src="images/7.jpg" class="full" />
</div>
</div>

</div>

</body>

</html>

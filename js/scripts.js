$(document).ready(function() {
  $("button").click(function() {
    let favFlavors = ["chocolate", "vanilla", "bacon", "soylent green", "hot dogs", "red velvet"]
    favFlavors.forEach(function(flavor) { 
     $("#list").append(flavor + " ");
    });
  });
});
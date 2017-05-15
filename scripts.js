// console.log("Sanity Check");
// console.dir(document);
// var dom = $(document);
// console.dir(dom)
// console.log($);
// console.dir($);

// 1. Wait until the document is fully ready
// 2. Once the dom is loaded run the anonymous function
$(document).ready(function(){
  // var thing = document.getElementById("thing");
  // console.log(thing);

  // THESE ALL DO THE SAME THING:
  // console.log(document.getElementById("image"));
  // console.log($("#image")); ---OR IF CLASS--- console.lof($(".image"));
  // console.log(document.querySelector("#image"));

  // body = document.getElementsByTagName("body");
  // body = $("body");

  $("button").click(function(){
    
  })

})

// Wait until ABSOLUTELY EVERYTHING has loaded (images, videos, etc)
// $(window).on("load", function(){
//   console.log("the window has loaded");
// });
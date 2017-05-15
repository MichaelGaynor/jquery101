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
    // console.log(this);
    // console.log($(this).attr("toDo"));
    var whatToDo = $(this).attr("toDo");
    if (whatToDo == "hide"){
      $("#thing").hide();
    }else if (whatToDo == "show"){
      $("#thing").show();
      // Same thing as:
      // document.getElementById("thing").style.display = "none"
    }else if (whatToDo == "toggle"){
      $("#thing").toggle();
    }else if (whatToDo == "html"){
      console.log($("#thing").html());
      $("#thing").html("<strong>I am new innerHTML</strong>");
    }else if (whatToDo == "text"){
      $("#thing").text("<strong>I am new innerHTML.</strong>");
    }else if (whatToDo == "prepend"){
      $("#thing").prepend("Firstly...")
    }
  });

});

// Wait until ABSOLUTELY EVERYTHING has loaded (images, videos, etc)
// $(window).on("load", function(){
//   console.log("the window has loaded");
// });
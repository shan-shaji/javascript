// $(document).ready(function(){
//    is used when the script cdn is placed in head tag
//   });

$("h1").addClass("title margin-50");

$("h1").click(function(e) {
  $("h1").css("color", "grey");
});

$(document).keypress(function(e) {
  $("h1").html(e.key);
  //    console.log(e.key);
});

$('h1').before("<button>before</button>");

$("h1").after("<button>after</button>");

$('h1').append("<button>Append</button>");

$('h1').prepend("<button>prepend</button>");


// to hide
// $("button").click(function(e){
//     $("h1").hide();
// })


// to toggle[ means the user can click the button to bring the content and again click to disappear]

// $("button").click(function(e){
//     $("h1").toggle();
// })

// fade options
// $("button").click(function(e){
//     if(this.innerText === "Append"){
//         $("h1").fadeOut();
//     }
//     else if(this.innerText === "after"){
//         $("h1").fadeIn();
//     }
   
// })

// $("button").click(function(e){
//         $("h1").fadeToggle();
//      })

// $("button").click(function(e){
//     // console.log(e);
//     $("h1").fadeIn();
// })


// Slide Animation
// $("button").click(function(e){
//         $("h1").slideUp();
//     })

// $("button").click(function(e){
//         $("h1").slideDown();
//     })

// $("button").click(function(e){
//         $("h1").slideToggle();
//         })


// can only animate numeric values
$("button").click(function(){
    $("h1").animate({
        opacity: 0.5
    })
});

$("a").attr("href", "https://yahoo.com");
$("button").css("color", "blue");

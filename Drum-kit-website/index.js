var numberOfButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHtml = this.innerHTML;
    makeSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);
  });

  document
    .querySelectorAll(".drum")
    [i].addEventListener("keypress", function(event) {
      makeSound(event.key);
      buttonAnimation(event.key);
    });
}

function makeSound(buttonInnerHtml) {
  switch (buttonInnerHtml) {
    case "a":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
      break;
    case "w":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
    case "s":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
    case "d":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
    case "j":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
    case "k":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
    case "l":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
    default:
      break;
  }
}

function buttonAnimation(eventKey) {
  var buttonClicked = document.querySelector("." + eventKey);
  buttonClicked.classList.add("pressed");

  setTimeout(function(){
    buttonClicked.classList.remove("pressed");
  }, 100);
}

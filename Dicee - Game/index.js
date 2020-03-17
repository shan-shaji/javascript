var randomNumber = Math.floor(Math.random() * 6 + 1);
var randomImage1 = "images/dice" + randomNumber + ".png";
document
  .querySelector(".img1")
  .setAttribute("src", randomImage1);



var randomNumber2 = Math.floor(Math.random() * 6 + 1);
var randomImage2 = "images/dice" + randomNumber2 + ".png";
document
  .querySelector(".img2")
  .setAttribute("src", randomImage2);



if (randomNumber === randomNumber2) {
  document.getElementsByTagName("h1")[0].innerText = "Draw";
} else if (randomNumber > randomNumber2) {
  document.getElementsByTagName("h1")[0].innerText = "player one wins";
} else {
  document.getElementsByTagName("h1")[0].innerText = "player two wins";
}

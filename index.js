var n = document.querySelectorAll(".drum").length;
console.log(n);

for (let i = 0; i < n; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    this.style.color = "white";

    var nam = "sounds/tom-" + (i + 1) + ".mp3";
    var audio = new Audio(nam);
    audio.play();
    var k = this.innerHTML;
    AnimationEffect(k);
  });
}
document.addEventListener("keypress", function (event) {
  var k = event.key;
  AnimationEffect(k);
  if (k == "w") {
    var ad = new Audio("sounds/tom-1.mp3");
    ad.play();
  } else if (k == "a") {
    var ad = new Audio("sounds/tom-2.mp3");
    ad.play();
  } else if (k == "s") {
    var ad = new Audio("sounds/tom-3.mp3");
    ad.play();
  } else if (k == "d") {
    var ad = new Audio("sounds/tom-4.mp3");
    ad.play();
  } else if (k == "j") {
    var ad = new Audio("sounds/tom-5.mp3");
    ad.play();
  } else if (k == "k") {
    var ad = new Audio("sounds/tom-6.mp3");
    ad.play();
  } else if (k == "l") {
    var ad = new Audio("sounds/tom-7.mp3");
    ad.play();
  }
});
function AnimationEffect(k) {
  var btn = document.querySelector("." + k);
  btn.classList.add("pressed");
  setTimeout(function () {
    btn.classList.remove("pressed");
  }, 150);
}

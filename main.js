const burgerBtn = document.querySelector(".burger-btn");
const navToggle = document.querySelector(".nav-wrapper");
const profileImg = document.querySelector(".profile-img");

burgerBtn.addEventListener("click", function () {
  console.log("clicked");
  navToggle.classList.toggle("nav-wrapper-active");
});

profileImg.addEventListener("mouseover", function (e) {
  console.log(e);
  this.style.transition = '"1s ease-in-out"';
});

function newImg(e) {
  e.style.transition = "1s ease-in-out";
  e.src = "./images/profilepic.png";
  // console.log(e);
}
function oldImg(e) {
  e.style.transition = "1s ease-in-out";
  e.src = "./images/profielpic-pixilated.png";
}

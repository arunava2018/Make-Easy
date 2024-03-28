const hamburger = document.querySelector("#hamburger");
const menu = document.querySelector("#menu");
// console.log(menu);
const hLink = document.querySelectorAll("#hlink");
const fasolid = document.querySelector(".fa-solid");
hamburger.addEventListener("click", () => {
  menu.classList.toggle("hidden");
  fasolid.classList.toggle("fa-xmark");
});
hLink.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    fasolid.classList.toggle("fa-xmark");
  });
});

//Testimonial
const userText = document.getElementsByClassName("user-text");
const userPic = document.getElementsByClassName("user-pic");
function showReview() {
  Array.from(userText).forEach((text) => {
    text.classList.remove("active-text");
  });
  Array.from(userPic).forEach((pic) => {
    pic.classList.remove("active-pic");
  });
  let i = Array.from(userPic).indexOf(event.target);
  userPic[i].classList.add("active-pic");
  userText[i].classList.add("active-text");
}

const navBar = document.querySelector("header");
window.onscroll = () =>{
  if(window.scrollY > 100){
    navBar.classList.add('bg-color-primary-dark');
    navBar.classList.add('border-b');
    navBar.classList.add('border-color-gray');
  }else{
    navBar.classList.remove('bg-color-primary-dark');
    navBar.classList.remove('border-b');
    navBar.classList.remove('border-color-gray');
  }
}
window.addEventListener('scroll', function() {
  let header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});
// MOBILE SIDE BAR 
function openNav() {
    document.getElementById("sideNav").style.width = "100%";
  }

  function exitNav() {
    document.getElementById("sideNav").style.width = "0";
  }

  function unHid() {
    document.getElementById("drop").removeAttribute("hidden");
  }

  function out() {
    document.getElementById("drop").setAttribute("hidden", true);
};

// HERO BACKGROUND IMAGE SLIDER
const slideShow = document.querySelector('.slide');
console.log(slideShow);

const images = [
    './images/beach.png',
    './images/slider-2-thumb.jpg',
    // './images/slider-3.jpg',
    './images/slider-3-thumb.jpg',
    './images/prop.jpg',
];
console.log(images);

let index = 0;

function changeBackground (){
    index = (index + 1) % images.length; 
    slideShow.style.backgroundImage = "url('" + images[index] + "')";
    setTimeout(changeBackground, 5000);
}
changeBackground();


// SELL & RENT TAB
const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // remove selected from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    // hide other articles
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});


// DREAM TEXT ACCORDION
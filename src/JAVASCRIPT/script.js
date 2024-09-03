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


// TAB MENU SCRIPT
const tabs = document.querySelectorAll("#tabs a");
const contents = document.querySelectorAll(".tab-content");

tabs.forEach(tab => {
  tab.addEventListener("click", function(event) {
    event.preventDefault();

    // Remove active class from all tabs
    tabs.forEach(t => t.classList.remove("active", "text-blue-800", "text-white", "bg-orange-500"));
    this.classList.add("active", "text-white", "bg-orange-500");

    // Hide all tab content
    contents.forEach(content => content.classList.add("hidden"));

    // Show the clicked tab's content
    const target = document.querySelector(this.getAttribute("href"));
    target.classList.remove("hidden");
  });
});
// document.addEventListener("DOMContentLoaded", function() {
//   /*J Slider Handle*/
//   let wrapper = document.getElementById("j-slider-wrapper");
//   let topLayer = wrapper.querySelector(".top");
//   let handle = wrapper.querySelector(".j-slider-handle");
//   let skew = 0;
//   let delta = 0;

//   if (wrapper.className.indexOf("skewed") != -1) {
//     skew = 1000;
//   }

//   wrapper.addEventListener("mousemove", function(e) {
//     delta = e.clientX - (window.innerWidth / 2) * 0.5;

//     handle.style.left = e.clientX + delta + "px";

//     topLayer.style.left = e.clientX + skew + delta + "px";
//   });
// });

/*Sidebar*/
function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("active");
}

/*Reveal SQL and Java*/
function reveal(event){
  event.target.previousElementSibling.style.clip = "rect(0px, "+(event.clientX-event.target.offsetLeft)+"px, 280px, 0px)";  
}

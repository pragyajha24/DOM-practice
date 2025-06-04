"use strict";

//EVENT LISTENER
//syntax of adding addEventListener
//element.addEventListener("click",function(){})

// const button2 = document.querySelector(".btn-2");

// button2.addEventListener("click", function () {
//   alert("I am studying more");
// });

// //Mouseover event

// //changing the background color of the box when mouse moves on it
// const box3 = document.querySelector('.card-3');

// box3.addEventListener('mouseover',function(){
//     box3.style.backgroundColor = 'blue';
// })

const revealBtn = document.querySelector(".reveal-btn");
const hiddenContent = document.querySelector(".hidden-content");

//check for hidden content
function revealContent() {
  if (hiddenContent.classList.contains("visible")) {
    hiddenContent.classList.remove("visible");
  } else {
    hiddenContent.classList.add("visible");
  }
}

revealBtn.addEventListener("click", revealContent);


"use strict";

//EVENT DELEGATION

//It allows user to append a single event listener to a parent
//element that adds it to all of its present and future
//descendants that match a selector.

document.querySelector(".container").addEventListener("click", function (e) {
  console.log(e.target.getAttribute("id") + " is clicked");

  if (e.target.matches("h4")) {
    e.target.style.backgroundColor = "lightblue";
  }
});

const container = document.querySelector('.container');
const newSport = document.createElement('h4');

newSport.innerText = 'cycling';
newSport.setAttribute('id','cycling');

container.appendChild(newSport);
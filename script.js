"use strict";

////5 WAYS TO SELECT AN ELEMENT
//GetElementById()
const heading = document.getElementById("heading");
console.log(heading);

//GetElementByClassName()
const listItem = document.getElementsByClassName("list-items");
console.log(listItem);

//GetElementByTagName()
const list = document.getElementsByTagName("li");
console.log(list);

//querySelector()
//this selects the first item that matched the selector it's given.
const container = document.querySelector("div");
console.log(container);

//querySelectorAll()
//selects all the  items that matched the selector it's given
const containerAll = document.querySelectorAll("div");
console.log(containerAll);

/////////////////////////////////
/////////////////////////////////
///DOM Manipulation

///STYLING ELEMENTS
//way to access CSS properties through JS
//manipulating the style of heading property in JS
//inline styling
//inline styling - only works for single element
heading.style.color = "red";

//if we want to apply styling to all list items we need to loop through list items
const listItems = document.querySelectorAll(".list-items");
console.log(listItems);
//listItems.style.fontSize = "2rem";
//listItems is a NodeList, not a number.So use i < listItems.length,because we have to compare through length not element
for (let i = 0; i < listItems.length; i++) {
  listItems[i].style.fontSize = "3rem";
}

////CREATING ELEMENTS FROM JS
const ul = document.querySelector("ul");
const li = document.createElement("li");

//ADDING ELEMENTS
ul.append(li); //it has no text in it right now,so not visible in browser but in console

//MODIFYING THE TEXT
// const firstListItem = document.querySelector(".list-items");
// console.log(firstListItem.innerText);
// console.log(firstListItem.textContent);
// console.log(firstListItem.innerHTML);

//we created li in html added it to ul for positioning and then added text in js
li.innerText = "Modern Family";


//MODIFYING ATTRIBUTES and CLASSES
// li.setAttribute('id','heading');
// li.removeAttribute('id');

li.classList.add('list-items');
li.classList.remove('list-items');

console.log(li.classList.contains('list-items'));

//REMOVE AN ELEMENT
li.remove();

//////////////////////////////
//////////////////////////////
//TRAVERSING THE DOM

//Parent Node Traversal
console.log(ul);

console.log(ul.parentNode);
console.log(ul.parentElement);

const html = document.documentElement;
console.log(html.parentNode); 
console.log(html.parentElement);

//Child Node Traversal
console.log(ul.childNodes);
console.log(ul.firstChild);
console.log(ul.lastChild);
console.log(ul.children);


//Sibling Node Traversal

const div = document.querySelector('div');
console.log(div.childNodes);

console.log(ul.previousSibling);
console.log(ul.nextSibling);

console.log(ul.previousElementSibling);
console.log(ul.nextElementSibling);
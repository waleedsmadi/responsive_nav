"use strict";

// select elements
const btnNavBar = document.querySelector(".navbar-toggle");
const navLinks = document.querySelector(".navbar-links");



// toggle the navbar
btnNavBar.addEventListener("click", function(){
    navLinks.classList.toggle("show");
});
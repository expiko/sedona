"use strict";

var navigationMain = document.querySelector(".main-navigation");
var navigationOpen = navigationMain.querySelector(".main-navigation__open");
var navigationClose = navigationMain.querySelector(".main-navigation__close");

navigationMain.classList.remove("main-navigation--nojs");

navigationOpen.addEventListener("click", function (event) {
  event.preventDefault();

  navigationMain.classList.remove("main-navigation--closed");
  navigationMain.classList.add("main-navigation--opened");
});

navigationClose.addEventListener("click", function (event) {
  event.preventDefault();

  navigationMain.classList.remove("main-navigation--opened");
  navigationMain.classList.add("main-navigation--closed");
});

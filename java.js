"use strict";

const title = document.querySelector("h1");

const button = document.querySelector("button");

const activate = function () {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  //   const newColor = `rgb(${r},${g},${b})`;
  //   document.body.style.backgroundColor = newColor;
  //   title.innerText = newColor;
};

button.addEventListener("click", activate);

const form = document.querySelector("form");
const qinput = document.querySelector("#qty");
const pinput = document.querySelector("#product");
const list = document.querySelector("#list");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const product = pinput.value;

  const newLI = document.createElement("LI");
  newLI.innerText = `${product}`;

  list.append(newLI);
});

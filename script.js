import { motion } from 'https://cdn.jsdelivr.net/npm/motion@11.11.13/+esm';
let count = 0;
let plusBtn = document.querySelector(".plus");
let minusBtn = document.querySelector(".minus");
let output = document.querySelector("#output");
let reset = document.querySelector("#reset");
const boxes = document.querySelector(".container");

animate(boxes, { rotate: 360 });

plusBtn.addEventListener("click", () => {
    count++;
    output.innerText = count;
});
minusBtn.addEventListener("click", () => {
    count--;
    output.innerText = count;
});
reset.addEventListener("click", () => {
    count = 0;
    output.innerText = count;
});
window.addEventListener("load", function() {
      document.body.classList.add("loaded");
});
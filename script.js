import { motion, animate } from 'https://cdn.jsdelivr.net/npm/motion@11.11.13/+esm';
let count = 0;
let plusBtn = document.querySelector(".plus");
let minusBtn = document.querySelector(".minus");
let output = document.querySelector("#output");
let reset = document.querySelector("#reset");

plusBtn.addEventListener("click", () => {
  count++;
  output.innerText = count;
  animate(plusBtn, { scale: 1.2 }, { duration: 0.2 });
  animate(output, { scale: 1.1 }, { duration: 0.2 });
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
import { animate } from "motion";
let count = 0;
let plusBtn = document.querySelector(".plus");
let minusBtn = document.querySelector(".minus");
let output = document.querySelector("#output");
let reset = document.querySelector("#reset");

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
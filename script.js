
let count = 0;
let plusBtn = document.querySelector(".plus");
let minusBtn = document.querySelector(".minus");
let output = document.querySelector("#output");
let reset = document.querySelector("#reset");

plusBtn.addEventListener("click", () => {
    count++;
    output.innerText = count;
    
    // Spin the button every time it's clicked
    animate(plusBtn, { rotate: "+=360" }, { duration: 0.5 });
});
minusBtn.addEventListener("click", () => {
  count--;
  output.innerText = count;

animate(plusBtn, { rotate: "+=360" }, { duration: 0.5 });
});

reset.addEventListener("click", () => {
  count = 0;
  output.innerText = count;
});
window.addEventListener("load", function() {
      document.body.classList.add("loaded");
});
let screen = document.querySelector("#screen");

for (let num of document.querySelectorAll(".button")) {
  num.addEventListener("click", function () {
    screen.textContent += num.id;
  });
}

let clear = document.querySelector("#clear");
clear.addEventListener("click", function () {
  screen.textContent = "";
});

let equals = document.querySelector("#equals");
equals.addEventListener("click", function () {
  screen.textContent = eval(screen.textContent);
});

const input = document.querySelector('#datetime-picker');
const startButton = document.querySelector('[data-start]');
const timer = document.querySelector(".timer");
const fields = document.querySelectorAll(".field");

input.style.width = "300px";
input.style.height = "40px";
startButton.style.height = "40px";
startButton.style.width = "80px";
startButton.style.color = "black";
startButton.style.fontSize = "18px";
startButton.style.backgroundColor = "#E0B6FD";
startButton.style.borderColor = "#CCCACD";

timer.style.display = "flex";
timer.style.maxWidth = "390px";
timer.style.gap = "27px"

fields.forEach((field) => {
field.style.display = "flex";
field.style.flexDirection = "column";
field.style.fontSize = "25px";
field.style.alignItems = "center";
})



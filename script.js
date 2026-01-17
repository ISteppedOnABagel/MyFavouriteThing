const TXT = document.getElementById("TXT");
const button = document.getElementById("button");

const T = [
  "Meow, milady",
  "Im feline more generous than usual today.",
  "This cat doesnt have nine lives!",
  "They seem catwalkin... They hatin!",
];
let index = 0;

button.addEventListener("click", (event) => {
  if (index > 3) {
    index = 0;
  }
  document.getElementById("TXT").innerHTML = T[index];
  index++;
});

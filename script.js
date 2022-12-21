var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");

color1.addEventListener("input", function () {
  console.log(color1.value);
});

color2.addEventListener("input", function () {
  console.log(color2.value);
});

// function updateValue(e) {
//   css.textContent = e.color1.value;
//   css.textContent = e.color2.value;
// }

const themeSwitcher = document.querySelector("#theme-switcher");
const container = document.querySelector(".container");

// sets default mode to dark
let mode = "dark";

// listens for a click event on toggle switch
themeSwitcher.addEventListener("click", function () {
  // if dark, apply light
  if (mode === "dark") {
    mode = "light";
    document.body.setAttribute("class", "light");
  }
  // if light, apply dark
  else {
    mode = "dark";
    document.body.setAttribute("class", "dark");
  }
});

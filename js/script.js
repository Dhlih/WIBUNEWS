let colors = ["#CED8E2", "#0a1a2b"];
let i = 0;

// ELEMEN HTML
const body = document.body;
const lightMode = document.querySelector(".light-mode");
const asideContent = document.querySelector(".aside-content");
const light = document.querySelectorAll(".light");
const menu = document.getElementById("menu");
const sideBar = document.querySelector(".sidebar");

lightMode.addEventListener("click", function () {
  if (i === 0) {
    body.style.backgroundColor = colors[1];
    body.style.color = "#FFF";
    light.forEach(function (el) {
      el.classList.add("dark");
      el.classList.remove("light");
    });
    lightMode.classList.remove("fa-moon");
    lightMode.classList.add("fa-sun");
    i += 1;
  } else {
    body.style.backgroundColor = colors[0];
    asideContent.style.color = "black";
    light.forEach(function (el) {
      el.classList.add("light");
      el.classList.remove("dark");
    });
    lightMode.classList.remove("fa-sun");
    lightMode.classList.add("fa-moon");
    i -= 1;
  }
});

menu.addEventListener("click", function () {
  if (menu && sideBar) {
    sideBar.classList.remove("sembunyi");
    sideBar.classList.add("muncul");
  } else {
    sideBar.classList.remove("muncul");
    sideBar.classList.add("sembunyi");
  }
});

body.addEventListener("click", function (event) {
  if (!sideBar.contains(event.target) && !menu.contains(event.target)) {
    sideBar.classList.remove("muncul");
    sideBar.classList.add("sembunyi");
  }
});

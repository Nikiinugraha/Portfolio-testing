
const hamburger_icon = document.getElementById("hamburger-icon");
const menuList = document.getElementById("menu-list");

hamburger_icon.addEventListener("click", () => {
    menuList.classList.toggle("hidden");
});


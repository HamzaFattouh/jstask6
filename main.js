const showbutton = document.querySelector(".showbutton");
const hidebutton = document.querySelector(".hidebutton");
const showbar = document.querySelector(".showbar");
const overlay = document.querySelector(".overlay");
const hiddenbar = document.querySelector(".hiddenbar");
const a = Array.from(document.querySelectorAll(".hiddenbar ul li a"));

showbutton.onclick = function () {
    showbar.style.width = '100%';
    showbar.style.height = '100%';
    overlay.style.width = '70%';
    overlay.style.height = '100%';
    hiddenbar.style.width = '30%';
    hiddenbar.style.height = '100vh';
    a.map(function (link) {
        link.style.width = '100%';
    });
}

hidebutton.onclick = function () {
    showbar.style.width = '0';
    showbar.style.height = '0';
    overlay.style.width = '0';
    overlay.style.height = '0';
    hiddenbar.style.width = '0';
    hiddenbar.style.height = '0';
    a.map(function (link) {
        link.style.width = '0';
    });
}
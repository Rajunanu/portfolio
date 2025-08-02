
function toggleTheme() {
    var element = document.body;
    var cardElement = document.getElementById("IdCard");
    element.classList.toggle("darkTheme");
    cardElement.classList.toggle("changeCard");
}
function toggleMenu() {
    var menu = document.getElementById("menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}
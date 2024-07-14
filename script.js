let navLinks = document.getElementById("navLinks");

function showMenu() {
    navLinks.style.right = "0";
    navLinks.style.transition = ".7s";
}

function hideMenu() {
    navLinks.style.right = "-60%";
    navLinks.style.transition = ".7s";
}
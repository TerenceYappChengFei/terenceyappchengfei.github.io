const toggleButton = document.getElementById("bento_menu");
const menu = document.getElementById("headerside_menu");

toggleButton.addEventListener("click", () => {
    menu.classList.toggle("active");
    // Change icon
    if (menu.classList.contains("active")) {
        toggleButton.innerHTML = "&times;"; // × (cross)
    } else {
        toggleButton.innerHTML = '<img src="img/bento-menu.svg" alt="bento_menu" width="20px">'; // ☰ (hamburger)
    }
});

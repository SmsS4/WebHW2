let is_dark_mode = false;

function change_dark() {
    if (is_dark_mode) {
        is_dark_mode = false;
        document.getElementById("navbar").classList.remove("dark-mode");
        document.getElementById("buttons-container").classList.remove("dark-mode");
    } else {
        is_dark_mode = true;
        document.getElementById("navbar").classList.add("dark-mode");
        document.getElementById("buttons-container").classList.add("dark-mode");
    }
};

function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
};
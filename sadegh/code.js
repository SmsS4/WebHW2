let is_dark_mode = false;

function change_dark() {
    if (is_dark_mode) {
        is_dark_mode = false;
        document.getElementById("site-navbar").classList.remove("dark-mode");
        document.getElementById("brand").classList.remove("dark-mode");
    } else {
        is_dark_mode = true;
        document.getElementById("site-navbar").classList.add("dark-mode");
        document.getElementById("brand").classList.add("dark-mode");
    }
};

function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
};
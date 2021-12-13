let is_dark_mode = false;

function change_dark() {
    elements = [
        "site-navbar",
        "brand",
        "activity",
        "gallery_desktop",
        "gallery_mobile",
        "contact",
        "body",
        "cards_holder",
        "leader_card",
        "normal_card1",
        "normal_card2"
    ]
    if (is_dark_mode) {
        is_dark_mode = false;
        for (var i= 0; i < elements.length; i++)
            document.getElementById(elements[i]).classList.remove("dark-mode");
    } else {
        is_dark_mode = true;
        for (var i= 0; i < elements.length; i++)
            document.getElementById(elements[i]).classList.add("dark-mode");
        
    }
};

function toggleMobileMenu(menu) {
    menu.classList.toggle('open');
};
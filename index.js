let menu = document.getElementById("menu-mobile");
let menu_btn = document.getElementById("menu-bar");
let close_bar = document.getElementsByClassName("close")[0];

menu_btn.onclick = function() {
    menu.style.display = "block";
}

close_bar.onclick = function() {
    menu.style.display = "none";
}

window.onclick = function(event) {
    if (event.target !== menu) {
      modal.style.display = "none";
    }
}

menu.onclick = function close() {
        menu.style.display = "none"
    }

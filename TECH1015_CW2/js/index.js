/* When 'menu' is clicked, toggle between hiding and showing the dropdown content */
function toggleMenu() {
    document.getElementById("menu-dropdown").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.drop-btn')) {
        var dropdown = document.getElementsByClassName("dropdown-content")[0];
        if (dropdown.classList.contains('show')) {
            dropdown.classList.remove('show');
        }
    }
}
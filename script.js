
// Toggle navigation menu
var navLinks = document.getElementById("navLinks");

// Show and hide menu functions
    function showMenu(){
        navLinks.style.right = "0";
    }

    function hideMenu(){
        navLinks.style.right = "-200px";
    }

// Set current year in footer
    document.getElementById("year").textContent = new Date().getFullYear();
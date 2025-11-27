const searchBox = document.getElementById("searchBox");
const searchBtn = document.getElementById("searchBtn");

// Page fade-in
window.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("page-loaded");
    searchBox.focus();
});

// Search logic
function runSearch() {
    const query = searchBox.value.trim();

    if (!query) {
        searchBox.classList.add("shake");
        setTimeout(() => searchBox.classList.remove("shake"), 300);
        return;
    }

    const googleUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    window.open(googleUrl, "_blank");
}

// Enter key
searchBox.addEventListener("keydown", (e) => {
    if (e.key === "Enter") runSearch();
});

// Click icon
searchBtn.addEventListener("click", runSearch);

// Auto-select text
searchBox.addEventListener("focus", () => {
    searchBox.select();
});

// Laptop shortcut Ctrl + K
document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.key.toLowerCase() === "k") {
        e.preventDefault();
        searchBox.focus();
        searchBox.select();
    }
});

// Toggle floating menu
const menu = document.querySelector('.floating-menu');
const menuBtn = document.querySelector('.menu-btn');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Dark/Light mode
const toggleThemeBtn = document.getElementById('toggleTheme');
toggleThemeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
    if(document.body.classList.contains('light-mode')) {
        document.body.style.backgroundColor = "#f4f4f4";
        document.body.style.color = "#131414";
    } else {
        document.body.style.backgroundColor = "#131414";
        document.body.style.color = "#e8eaed";
    }
});

// Change background
const changeBgBtn = document.getElementById('changeBg');
changeBgBtn.addEventListener('click', () => {
    const url = prompt("Enter background image URL:");
    if(url) {
        document.body.style.backgroundImage = `url(${url})`;
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundPosition = "center";
    }
});

// Update placeholder
const placeholderInput = document.getElementById('placeholderInput');
const setPlaceholderBtn = document.getElementById('setPlaceholder');

setPlaceholderBtn.addEventListener('click', () => {
    const text = placeholderInput.value.trim();
    if(text) {
        searchBox.setAttribute('placeholder', text);
        placeholderInput.value = '';
    }
});

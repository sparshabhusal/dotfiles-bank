const searchBox = document.getElementById("searchBox");
const searchBtn = document.getElementById("searchBtn");
const title = document.getElementById("title");

// Page fade-in
window.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("page-loaded");
    searchBox.focus(); // Auto-focus search box
});

// Search logic
function runSearch() {
    const query = searchBox.value.trim();

    if (!query) {
        searchBox.classList.add("shake");
        setTimeout(() => searchBox.classList.remove("shake"), 300);
        return;
    }

    // Open search in same tab
    const googleUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    window.location.href = googleUrl;
}

// Enter key
searchBox.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        e.preventDefault();
        runSearch();
    }
});

// Click icon
searchBtn.addEventListener("click", (e) => {
    e.preventDefault();
    runSearch();
});

// Auto-select text on focus
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

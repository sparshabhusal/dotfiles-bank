const searchBox = document.getElementById("searchBox");
const searchBtn = document.getElementById("searchBtn");

// Page fade-in
window.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("page-loaded");
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

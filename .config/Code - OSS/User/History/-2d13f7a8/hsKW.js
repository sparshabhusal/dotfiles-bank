const searchBox = document.getElementById("searchBox");
const searchBtn = document.getElementById("searchBtn");

// Smooth fade-in when page loads
window.addEventListener("DOMContentLoaded", () => {
    document.body.classList.add("page-loaded");
    searchBox.focus();
});

// The search function
function runSearch() {
    const query = searchBox.value.trim();

    if (!query) {
        // Shake animation for empty input
        searchBox.classList.add("shake");
        setTimeout(() => searchBox.classList.remove("shake"), 300);
        return;
    }

    const googleUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
    window.open(googleUrl, "_blank");
}

// Run on Enter
searchBox.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        runSearch();
    }
});

// Run on clicking search icon
searchBtn.addEventListener("click", runSearch);

// Auto-select input when focused
searchBox.addEventListener("focus", () => {
    searchBox.select();
});

// Laptop-friendly: Ctrl + K shortcut
document.addEventListener("keydown", (e) => {
    if (e.ctrlKey && e.key.toLowerCase() === "k") {
        e.preventDefault();
        searchBox.focus();
        searchBox.select();
    }
});

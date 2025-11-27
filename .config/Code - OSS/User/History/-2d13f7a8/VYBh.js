const searchBox = document.getElementById('searchBox');
const searchBtn = document.getElementById('searchBtn');

function performSearch() {
    const query = searchBox.value.trim();
    if(query) {
        const url = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        window.open(url, '_blank');
    }
}

// Search when button is clicked
searchBtn.addEventListener('click', performSearch);

// Search when Enter key is pressed
searchBox.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        performSearch();
    }
});

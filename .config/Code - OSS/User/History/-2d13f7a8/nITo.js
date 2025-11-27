const searchBox = document.getElementById('searchBox');

searchBox.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        const query = searchBox.value.trim();
        if(query) {
            // Always search on Google
            const googleUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
            window.open(googleUrl, '_blank');
        }
    }
});

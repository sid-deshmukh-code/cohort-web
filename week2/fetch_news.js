// Imagine this is a function that fetches the latest news from a server
function fetchLatestNews() {
    return new Promise((resolve, reject) => {
        // Simulate a delay (like waiting for the server)
        setTimeout(() => {
            const success = false; // Simulate success or failure

            if (success) {
                // If everything goes well, resolve the promise with the news data
                resolve(['News 1', 'News 2', 'News 3']);
            } else {
                // If something goes wrong, reject the promise with an error message
                reject('Failed to fetch news.');
            }
        }, 2000); // Wait for 2 seconds
    });
}

// Now let's use the promise
fetchLatestNews()
    .then((news) => {
        // This runs if the promise is resolved (the news was fetched successfully)
        console.log('Here are the latest news articles:', news);
    })
    .catch((error) => {
        // This runs if the promise is rejected (there was an error)
        console.log('Oh no! Something went wrong:', error);
    });

console.log("Fetching news..."); // This runs immediately, even while the news is being fetched


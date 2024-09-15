const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

let apiQuotes = [];

// New quote
function newQuote() {
    // Pick a random quote from apiQuote array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

    quoteText.textContent = quote.text;
    authorText.textContent = (!quote.author) ? "Unknown" : quote.author;
}

// Get quotes from API
async function getQuotes(){
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    try {
        const reponse = await fetch(apiUrl);
        apiQuotes = await reponse.json();

        newQuote();


    } catch (error) {
        // Catch Error here
        console.log(error);
    }
}

// On load 
getQuotes();
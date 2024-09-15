const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');
const loader = document.getElementById('loader');

let apiQuotes = [];

function showLoadingSpinner(){
    loader.hidden = false;
}

// Hide showLoadingSpinner
function removeLoadingSpinner(){
    loader.hidden = true;
    quoteContainer.classList.remove('hidecontent');
}

// New quote
function newQuote() {
    showLoadingSpinner();
    // Pick a random quote from apiQuote array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];

    quoteText.innerText = quote.text;
    authorText.innerText = (!quote.author) ? "Unknown" : quote.author;

    // Set quote, hide loader
    removeLoadingSpinner();
}

// Get quotes from API
async function getQuotes(){
    
    const apiUrl = 'https://jacintodesign.github.io/quotes-api/data/quotes.json';
    // const apiUrl = 'https://zenquotes.io/api/random'; 
    // const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
    
    try {
        const reponse = await fetch(apiUrl);
        apiQuotes = await reponse.json();
        newQuote();
    } catch (error) {
        // Catch Error here
        console.log('Whoops, no quote',error);
    }
}

// On load 
getQuotes();


// Tweet a quote
function tweetQuote() {
    const quote = quoteText.innerText;
    const author = authorText.innerText;
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quote} - ${author}`; 
    window.open(twitterUrl, '_blank')
}

// Event listeners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click', tweetQuote);
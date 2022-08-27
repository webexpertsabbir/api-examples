const loadQuote = () => {
    fetch('https://api.kanye.rest/')
    .then(res => res.json())
    .then(data => dispalyQuote(data))
}

const dispalyQuote = quote => {
    // console.log(quote);
    const blockQoute = document.getElementById('dispaly-qoute');
    blockQoute.innerText = quote.quote;
}
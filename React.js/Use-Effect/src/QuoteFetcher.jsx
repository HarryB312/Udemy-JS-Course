import { useState } from "react";

const Random_Quote_URL = 'https://inspo-quotes-api.herokuapp.com/quotes/random'

export default function QuoteFetcher(){
    const [quote, setQuote] = useState({});
    async function fetchQuote() {
        const response = await fetch(Random_Quote_URL);
        const jsonResponse = await response.json();
        const randomQuote = jsonResponse.quote;
        setQuote(randomQuote)
    };
    return(
        <div>
            <button onClick={fetchQuote}>Get Quote Using Handler</button>
            <h1>{quote.text}</h1>
            <h3>{quote.author}</h3>
        </div>
    )
}
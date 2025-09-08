import React, { useEffect, useState } from 'react'
import './Quotes.css'
import twitter_icon from '../assets/twitter.png'

const Quotes = () => {

    const [quoteData, setQuoteData] = useState(false);

    const search = async () => {
        try {
            const url = `https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json`;

            const response = await fetch(url);
            const data = await response.json();
            console.log(data);
            const i = Math.floor(Math.random()*data.quotes.length);
            setQuoteData({
                quote: data.quotes[i].quote,
                author: data.quotes[i].author,
            })
        }
        catch (error) {
            setQuoteData(false);
            console.error("Error in fetching quote data");
        }
    }

    useEffect(() => {
        search();
    }, []);

  return (
    <div id="quote-box">
        <div id="quote-area">
            <p id="text">{quoteData.quote}</p>
            <p id="author">- {quoteData.author}</p>
        </div>
        <div className="button-area">
            <a href="https://twitter.com/intent/tweet" id="tweet-quote" target="_blank">
                <img src={twitter_icon} height="50px"/>
            </a> 
            <button id="new-quote" onClick={()=>search()}>New quote</button>
        </div>
    </div>
  )
}

export default Quotes

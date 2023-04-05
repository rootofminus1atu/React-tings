import React, { useState, useEffect } from 'react';
import QuoteList from './QuoteList';


export default function QuotesLogic() {
  const [quotes, setQuotes] = useState([]);
  const [disabled, setDisabled] = useState(false);

  const fetchQuote = async () => {
    setDisabled(true);
    console.log(quotes);
    const incompleteQuote = { completed: false, data: {} };
    setQuotes(prevQuotes => [incompleteQuote, ...prevQuotes]);
  
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      const updatedQuotes = [incompleteQuote, ...quotes];
      updatedQuotes[0].completed = true;
      updatedQuotes[0].data = data;
      setQuotes(updatedQuotes);
    } catch (error) {
      console.error(error);
    }

    setDisabled(false);
  
    /* this implementation above is the closest to working */
    /* everything below is what I tried */



/*
    console.log(quotes)
    const incompleteQuote = { completed: false, data: {} };
    setQuotes(prevQuotes => [...prevQuotes, incompleteQuote]);

    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then((data) => {
        setQuotes(prevQuotes => {
          prevQuotes[prevQuotes.length - 1].completed = true;
          prevQuotes[prevQuotes.length - 1].data = data;
        });
      })
*/


    /*
    const startQuote = {completed: false}
    setQuotes([...quotes, startQuote]);

    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => {...data, ...startQuote});

    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => {setQuotes([...quotes, data]); console.log(data)});
*/
/*
    const startQuote = { completed: false };
    setQuotes([...quotes, startQuote]);
    console.log(quotes);
    try {
      const response = await fetch('https://api.quotable.io/random');
      const data = await response.json();
      const newQuote = { ...data, ...startQuote };
      setQuotes([...quotes, newQuote]);
      console.log(quotes);
    } catch (error) {
      console.error(error);
    }
*/
  };

  /*
  useEffect(() => {
    fetchQuote();
    console.log(quotes);
  }, []);
  */

  return (
    <section>
      <button 
        disabled={disabled}
        onClick={fetchQuote}
      >
        Generate new
      </button>
      <QuoteList quotes={quotes} />
    </section>
  );
}


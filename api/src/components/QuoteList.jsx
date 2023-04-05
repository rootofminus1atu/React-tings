import React from 'react';
import QuoteItem from './QuoteItem';

export default function QuoteList({ quotes }) {
  return (
    <div>
      {quotes.map((quote, index) => (
        <QuoteItem key={index} quote={quote} />
      ))}
    </div>
  );
}

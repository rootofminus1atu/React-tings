import React, { useState, useEffect } from 'react';

export default function QuoteItem({ quote }) {
  const { completed, data } = quote;

  return (
    <div className='border border-green-500'>
      {!completed ? (
        <p>Loading...</p>
      ) : (
        <div>
          <p>{data.content}</p>
          <p className='text-right'>{data.author}</p>
          <p>insert other quote attributes</p>
        </div>
      )}
    </div>
  );
}

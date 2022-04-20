import React from 'react';
import Image from 'next/image';

export default function index() {
  const fetchBooks = async () => {
    const books = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=${process.env.GOOGLE_BOOKS_API_KEY}`
    )
      .then((response) => response.json())
      .then((data) => console.log(data));

    console.log(books);
  };
  fetchBooks();
  return (
    <div>
      <h1>Welcome to Book Club, a work in progress...</h1>
    </div>
  );
}

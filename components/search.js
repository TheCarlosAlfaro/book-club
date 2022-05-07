import React, { useState } from 'react';
import Image from 'next/image';
import styles from './search.module.css';

export default function Search() {
  const [formInputs, setFormInputs] = useState();
  const [searchResults, setSearchResults] = useState([]);

  const handleInputs = (event) => {
    let { name, value } = event.target;
    setFormInputs({ ...formInputs, [name]: value });
  };

  const search = async (event) => {
    event.preventDefault();
    let books = await fetch(`/api/v1/search/${formInputs.searchTerm}`);
    books = await books.json();
    setSearchResults(books.results);
  };

  return (
    <div className={styles.container}>
      <h3>Add a book you want to read</h3>
      <form onSubmit={search}>
        <input
          className={styles.search}
          placeholder="Search by title or author"
          name="searchTerm"
          onChange={handleInputs}
          type="text"
          required
        />
        <button>Search</button>
      </form>
      {searchResults.length > 0 && (
        <div className="giphy-search-results-grid">
          {searchResults.map((book, index) => {
            return (
              <div key={index}>
                <h3>{book.volumeInfo.title}</h3>
                {book.volumeInfo.imageLinks ? (
                  <Image
                    src={book.volumeInfo.imageLinks.thumbnail}
                    alt={book.title}
                    width={96}
                    height={128}
                  />
                ) : (
                  <p>no image found</p>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

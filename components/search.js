import styles from './search.module.css';
import Image from 'next/image';

import React from 'react';

export default function Search({ search, handleInputs, searchResults }) {
  return (
    <div className={styles.container}>
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
          {searchResults.map((each, index) => {
            return (
              <div key={index}>
                <h3>{each.volumeInfo.title}</h3>
                {each.volumeInfo.imageLinks ? (
                  <Image
                    src={each.volumeInfo.imageLinks.thumbnail}
                    alt={each.title}
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

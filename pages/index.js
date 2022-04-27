import { useEffect, useState } from 'react';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import styles from '../components/search.module.css';

export default function Home({ books, googleBooksApiKey }) {
  const [formInputs, setFormInputs] = useState();
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    setSearchResults([]);
  }, [books]);

  const handleInputs = (event) => {
    let { name, value } = event.target;
    setFormInputs({ ...formInputs, [name]: value });
  };

  const search = async (event) => {
    event.preventDefault();
    let books = await fetch(
      `https://www.googleapis.com/books/v1/volumes?q=${formInputs.searchTerm}&key=${googleBooksApiKey}`
    );
    books = await books.json();
    setSearchResults(books.items);
  };

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Search</h2>

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
                      <img
                        src={each.volumeInfo.imageLinks.thumbnail}
                        alt={each.title}
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
      </section>
    </Layout>
  );
}

export const getStaticProps = async () => {
  const googleBooksApiKey = process.env.GOOGLE_BOOKS_API_KEY;
  const books = {};

  return {
    props: { books, googleBooksApiKey },
  };
};

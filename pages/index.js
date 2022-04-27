import { useState } from 'react';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import Search from '../components/search';

export default function Home({ books, googleBooksApiKey }) {
  const [formInputs, setFormInputs] = useState();
  const [searchResults, setSearchResults] = useState([]);

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

        <Search
          search={search}
          handleInputs={handleInputs}
          searchResults={searchResults}
        />
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

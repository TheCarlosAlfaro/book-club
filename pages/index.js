import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import BookSearch from '../components/BookSearch';
const googleBookApiKey = process.env.GOOGLE_BOOKS_API_KEY;

export const getStaticProps = async () => {
  const res = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=javascript&key=${googleBookApiKey}`
  );
  const data = await res.json();

  return {
    props: { books: data.items },
  };
};

export default function Home({ books }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Search</h2>
        <BookSearch books={books} />
      </section>
    </Layout>
  );
}
import React from 'react';

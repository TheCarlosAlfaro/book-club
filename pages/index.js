import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import Search from '../components/search';
import utilStyles from '../styles/utils.module.css';

export async function getStaticProps(props) {
  console.log('hi getStaticProps');
  console.log('google API KEY', process.env.GOOGLE_BOOKS_API_KEY);
  const response = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=flowers+inauthor:keyes&key=${process.env.GOOGLE_BOOKS_API_KEY}`
  );

  const data = await response.json();
  console.log(data);

  return {
    props: data,
  };
}

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Search</h2>
        <Search />
      </section>
    </Layout>
  );
}

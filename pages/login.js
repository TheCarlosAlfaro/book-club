import React, { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Login() {
  //state
  const [email, setEmail] = useState('');
  const [userMsg, setUserMsg] = useState('');

  //variables
  const router = useRouter();

  // functions
  const onChangeEmail = (event) => {
    setUserMsg('');
    setEmail(event.target.value);
  };

  const handleLoginWithEmail = (event) => {
    event.preventDefault();
    if (email) {
      console.log('email');
      if (email === 'hello@carlosalfaro.dev') {
        console.log('Route to dashboard');
        router.push('/');
      } else {
        setUserMsg('Something went wrong');
      }
    } else {
      setUserMsg('Enter a valid email address');
    }
  };

  return (
    <Layout home>
      <Head>
        <title>{siteTitle} Signin</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <main>
          <div>
            <h2 className={utilStyles.headingLg}>Signin</h2>
            <input
              type="text"
              placeholder="Email address"
              onChange={onChangeEmail}
            />
            <p className="user--message">{userMsg}</p>
            <button onClick={handleLoginWithEmail}>Signin</button>
          </div>
        </main>
      </section>
    </Layout>
  );
}

import React, { useState } from 'react';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Login() {
  const [email, setEmail] = useState('');
  const [userMsg, setUserMsg] = useState('');

  const onChangeEmail = (event) => {
    setUserMsg('');
    setEmail(event.target.value);
  };

  const handleLoginWithEmail = (event) => {
    event.preventDefault();

    if (email) {
      // TODO: login user
      console.log('there is an email');
    } else {
      // TODO: show user message
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

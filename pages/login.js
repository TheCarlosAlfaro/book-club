import React from 'react';
import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';

export default function Login() {
  return (
    <div>
      <Head>
        <title>{siteTitle} Signin</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      This should be the login
    </div>
  );
}

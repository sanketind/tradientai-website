import React from 'react';
import Hero from '../components/Hero';
import Features from '../components/Features';
import Footer from '../components/Footer';
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home = () => {
  return (
    <>
      <Head>
        <title>Tradient</title>
        <meta name="description" content="Tradient application" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Welcome to Tradient</h1>
      </main>
    </>
  );
};

export default Home; 
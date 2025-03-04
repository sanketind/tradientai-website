import React from 'react';
import Head from 'next/head';
import '../styles/globals.css'; // Adjust the path as necessary
import { AppProps } from 'next/app';

const MyApp = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Head>
                <link rel="icon" href="/images/tradient.png" type="image/png" />
                <title>Tradient AI</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <Component {...pageProps} />
        </>
    );
};

export default MyApp; 
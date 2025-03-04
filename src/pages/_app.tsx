import React from 'react';
import Head from 'next/head';
import '../styles/globals.css';
import { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import posthog from 'posthog-js';
import { PostHogProvider } from 'posthog-js/react';
import { useEffect } from 'react';

// Check that PostHog is client-side (used to handle Next.js SSR)
if (typeof window !== 'undefined') {
    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY as string, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://us.i.posthog.com',
        capture_pageview: false // Disable automatic pageview capture, as we'll capture manually
    });
}

const MyApp = ({ Component, pageProps }: AppProps) => {
    const router = useRouter();

    useEffect(() => {
        // Track page views
        const handleRouteChange = () => {
            posthog.capture('$pageview');
        };

        router.events.on('routeChangeComplete', handleRouteChange);

        return () => {
            router.events.off('routeChangeComplete', handleRouteChange);
        };
    }, [router.events]);

    return (
        <>
            <Head>
                <link rel="icon" href="/images/tradient.png" type="image/png" />
                <title>Tradient AI</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>
            <PostHogProvider client={posthog}>
                <Component {...pageProps} />
            </PostHogProvider>
        </>
    );
};

export default MyApp; 
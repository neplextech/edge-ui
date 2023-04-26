import '../styles/globals.css';
import '@edge-ui/react/styles.css';
import type { AppProps } from 'next/app';
import { Manrope } from 'next/font/google';
import { EdgeUIProvider, Toaster } from '@edge-ui/react';
import Navbar from '../components/navbar';

const manrope = Manrope({
    subsets: ['latin'],
    variable: '--font-sans',
    display: 'swap'
});

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <EdgeUIProvider fontSans={manrope.style.fontFamily}>
            <Toaster />
            <>
                <Navbar />
                <Component {...pageProps} />
            </>
        </EdgeUIProvider>
    );
}

export default MyApp;

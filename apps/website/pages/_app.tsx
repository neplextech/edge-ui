import '../styles/globals.css';
import '@edge-ui/react/styles.css';
import type { AppProps } from 'next/app';
import { Manrope } from 'next/font/google';
import { EdgeUIProvider } from '@edge-ui/react';
import { Toaster } from '../components/toaster';

const manrope = Manrope({
    subsets: ['latin'],
    variable: '--font-sans',
    display: 'swap'
});

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <EdgeUIProvider fontSans={manrope.style.fontFamily}>
            <Toaster />
            <Component {...pageProps} />
        </EdgeUIProvider>
    );
}

export default MyApp;

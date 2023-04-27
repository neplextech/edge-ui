import '../../styles/globals.css';
import '@edge-ui/react/styles.css';
import type { AppProps } from 'next/app';
import { Manrope } from 'next/font/google';
import { EdgeUIProvider, Toaster } from '@edge-ui/react';
import Navbar from '../components/navbar';
import { useRouter } from 'next/router';
import { MDXProvider } from '@mdx-js/react';
import { mdxComponents } from '../components/mdx';

const manrope = Manrope({
    subsets: ['latin'],
    variable: '--font-sans',
    display: 'swap'
});

function MyApp({ Component, pageProps }: AppProps) {
    const { pathname } = useRouter();

    return (
        <EdgeUIProvider fontSans={manrope.style.fontFamily}>
            <Toaster />
            <Navbar />
            {['/components', '/documentation'].some((p) => pathname.startsWith(p)) ? (
                <MDXProvider components={mdxComponents as any}>
                    <main className="my-5 flex flex-row justify-around">
                        <div>sidebar</div>
                        <section>
                            <Component {...pageProps} />
                        </section>
                        <div>sidebar</div>
                    </main>
                </MDXProvider>
            ) : (
                <Component {...pageProps} />
            )}
        </EdgeUIProvider>
    );
}

export default MyApp;

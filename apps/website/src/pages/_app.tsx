import '../../styles/globals.css';
import '@edge-ui/react/styles.css';
import type { AppProps } from 'next/app';
import { Manrope } from 'next/font/google';
import { EdgeUIProvider, Layout, Toaster } from '@edge-ui/react';
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
                    <Layout horizontalSpacing={'sm'} verticalSpacing={'md'} className="justify-around items-center">
                        <div className="grid grid-rows-3 grid-flow-col gap-4">
                            <div className="row-span-3">sidebar</div>
                            <section className="col-span-3">
                                <Component {...pageProps} />
                            </section>
                        </div>
                    </Layout>
                </MDXProvider>
            ) : (
                <Component {...pageProps} />
            )}
        </EdgeUIProvider>
    );
}

export default MyApp;

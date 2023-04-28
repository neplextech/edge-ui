import '@edge-ui/react/styles.css';
import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import { Manrope } from 'next/font/google';
import { EdgeUIProvider, Layout, Toaster } from '@edge-ui/react';
import Navbar from '../components/navbar';
import { useRouter } from 'next/router';

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
            <Layout horizontalSpacing={'sm'} className="justify-around items-center mt-10">
                {['/docs', '/components'].some((p) => pathname.startsWith(p)) ? (
                    <div className="grid grid-rows-1 grid-flow-col gap-4">
                        <aside className="row-span-3">sidebar</aside>
                        <section className="col-span-3">
                            <Component {...pageProps} />
                        </section>
                    </div>
                ) : (
                    <Component {...pageProps} />
                )}
            </Layout>
        </EdgeUIProvider>
    );
}

export default MyApp;

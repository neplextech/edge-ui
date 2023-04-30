import '@edge-ui/react/styles.css';
import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import { Manrope } from 'next/font/google';
import { EdgeUIProvider, Layout, Toaster } from '@edge-ui/react';
import Navbar from '../components/navbar';
import { useRouter } from 'next/router';
import { Sidebar } from '@/components/sidebar';
import { useState } from 'react';

const manrope = Manrope({
    subsets: ['latin'],
    variable: '--font-sans',
    display: 'swap'
});

function MyApp({ Component, pageProps }: AppProps) {
    const [isOpen, setIsOpen] = useState(false);

    function onClose() {
        setIsOpen(false);
    }
    function onOpen() {
        setIsOpen(true);
    }

    const { pathname } = useRouter();
    return (
        <EdgeUIProvider fontSans={manrope.style.fontFamily}>
            <Toaster />
            <Navbar onOpen={onOpen} />

            <Sidebar isOpen={isOpen} onClose={onClose} />

            <Layout horizontalSpacing={'sm'} className="justify-around items-center my-16">
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

import '../styles/globals.css';
import '@edge-ui/react/styles.css';
import type { AppProps } from 'next/app';
import { Manrope } from 'next/font/google';

const manrope = Manrope({
    subsets: ['latin'],
    variable: '--font-sans',
    display: 'swap'
});

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <style jsx global>{`
				:root {
					--font-sans: ${manrope.style.fontFamily};
				}
			}`}</style>
            <Component {...pageProps} />
        </>
    );
}

export default MyApp;

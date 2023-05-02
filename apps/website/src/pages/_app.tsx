import '@edge-ui/react/styles.css';
import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import { Manrope } from 'next/font/google';
import {
    EdgeUIProvider,
    Heading,
    Layout,
    Paragraph,
    Toaster,
    Blockquote,
    List,
    ListItem,
    Code,
    CodeBlock
} from '@edge-ui/react';
import Navbar from '../components/navbar';
import { useRouter } from 'next/router';
import { Sidebar } from '@/components/sidebar';
import { MDXProvider } from '@mdx-js/react';
import Link from 'next/link';

const manrope = Manrope({
    subsets: ['latin'],
    variable: '--font-sans',
    display: 'swap'
});

const lgn = (p: string) => {
    return p?.match(/language-(\w+)/)?.[1] || 'text';
};

const mdxComponents = {
    h1: (props: any) => <Heading.H1 {...props} />,
    h2: (props: any) => <Heading.H2 {...props} />,
    h3: (props: any) => <Heading.H3 {...props} />,
    h4: (props: any) => <Heading.H4 {...props} />,
    h5: (props: any) => <Heading.H5 {...props} />,
    h6: (props: any) => <Heading.H6 {...props} />,
    p: (props: any) => <Paragraph {...props} />,
    blockquote: (props: any) => <Blockquote {...props} />,
    ul: (props: any) => <List {...props} />,
    li: (props: any) => <ListItem {...props} />,
    pre: (props: any) => <div {...props} />,
    a: (props: any) => <Link className="underline text-blue-500 hover:text-blue-700" {...props} />,
    code: (props: any) =>
        typeof props.children === 'string' && !props.children.includes('\n') ? (
            <Code {...props} />
        ) : (
            <CodeBlock lines={props.children.trim().includes('\n')} language={lgn(props.className)} {...props} />
        )
};

function MyApp({ Component, pageProps }: AppProps) {
    const { pathname } = useRouter();
    return (
        <EdgeUIProvider fontSans={manrope.style.fontFamily}>
            <Toaster />
            <Navbar />

            <Layout className="justify-around items-center my-7">
                {['/docs', '/components'].some((p) => pathname.startsWith(p)) ? (
                    <>
                        <div className="md:flex md:gap-14">
                            <Sidebar />
                            <section className="md:flex-1 overflow-x-hidden">
                                <MDXProvider components={mdxComponents}>
                                    <Component {...pageProps} />
                                </MDXProvider>
                            </section>
                        </div>
                    </>
                ) : (
                    <Component {...pageProps} />
                )}
            </Layout>
        </EdgeUIProvider>
    );
}

export default MyApp;

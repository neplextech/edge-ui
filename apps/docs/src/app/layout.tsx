import './globals.css';
import type { Metadata } from 'next';
import { poppins } from '@/lib/fonts';
import { PageLayout, ThemeProvider } from '@edge-ui/react';
import { Navbar } from '@/components/navbar';

export const metadata: Metadata = {
    title: 'Edge UI',
    description: 'Beautifully designed components library for neplex, based on shadcn-ui.'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={poppins.className}>
                <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
                    <PageLayout>
                        <Navbar />
                        {children}
                    </PageLayout>
                </ThemeProvider>
            </body>
        </html>
    );
}

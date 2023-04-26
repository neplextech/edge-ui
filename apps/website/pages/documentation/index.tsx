import { Heading } from '@edge-ui/react';
import Link from 'next/link';
import React from 'react';

export default function Documentation() {
    return (
        <main className="my-5 px-[12.8rem]">
            <Heading>Introduction</Heading>
            <Heading size="h4" className="font-semibold text-muted-foreground">
                EdgeUI is a minimal ui components library for React based on{' '}
                <Link href="https://ui.shadcn.com/" className="text-blue-500 underline">
                    shadcn/ui
                </Link>
                .
            </Heading>
        </main>
    );
}

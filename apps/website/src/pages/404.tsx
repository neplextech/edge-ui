import { Center } from '@edge-ui/react';
import Link from 'next/link';

export default function Custom404() {
    return (
        <Center>
            <div className="text-center">
                <h1 className="font-black text-gray-200 text-9xl dark:text-gray-700">404</h1>

                <p className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">Uh-oh!</p>

                <p className="mt-4 text-gray-500 dark:text-gray-400">We can{"'"}t find that page.</p>
                <Link
                    href="/"
                    className="inline-block px-5 py-3 mt-6 text-sm font-medium text-primary-foreground bg-primary text-pri rounded-sm"
                >
                    Go Back Home
                </Link>
            </div>
        </Center>
    );
}

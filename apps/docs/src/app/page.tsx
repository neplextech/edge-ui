import { GitHubIcon } from '@/components/icons/github';
import { NpmIcon } from '@/components/icons/npm';
import { inter } from '@/lib/fonts';
import { Button, cn } from '@edge-ui/react';
import Link from 'next/link';

export default function Home() {
    return (
        <main>
            <div className="grid h-[80vh] place-items-center">
                <div className="mx-auto mb-10 mt-12 max-w-xl px-2.5 text-center lg:px-0">
                    <h1
                        className={cn(
                            'font-display mt-5 text-5xl font-extrabold leading-[1.15] lg:text-6xl lg:leading-[1.15]',
                            inter.className
                        )}
                    >
                        Let
                        <br />
                        <span className="bg-gradient-to-r from-purple-600 via-indigo-500 to-pink-600 bg-clip-text text-transparent dark:invert">
                            Edge UI
                        </span>
                        <br />
                        do the magic.
                    </h1>
                    <h2 className="mt-5 text-gray-600 lg:text-xl">
                        Beautifully designed components based on{' '}
                        <Link
                            href="https://ui.shadcn.com"
                            target="_blank"
                            className="text-purple-600 dark:text-lime-600 hover:underline"
                        >
                            shadcn-ui
                        </Link>
                        .
                    </h2>
                    <div className="mx-auto mt-5 flex max-w-fit space-x-4">
                        <Link href="https://github.com/neplextech/edge-ui">
                            <Button className="border px-5 py-2 text-sm shadow-lg transition-all gap-1" size="lg">
                                <GitHubIcon />
                                GitHub
                            </Button>
                        </Link>
                        <Link href="https://www.npmjs.com/package/@edge-ui/react">
                            <Button
                                className="border px-5 py-2 shadow-lg transition-all gap-1"
                                variant="destructive"
                                size="lg"
                            >
                                <NpmIcon />
                                npm
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </main>
    );
}

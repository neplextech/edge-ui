import { Heading, Layout, Card, CardHeader, CardTitle, CardDescription, CardContent, GitHubIcon } from '@edge-ui/react';
import Link from 'next/link';
import { ComponentIcon, PenToolIcon } from 'lucide-react';

export default function Home() {
    return (
        <Layout horizontalSpacing={'sm'} verticalSpacing={'md'}>
            <div className="text-center space-y-8">
                <Heading.H1>EdgeUI</Heading.H1>
                <Heading.H2 className="text-[#666] dark:text-[#7f7f7f]">
                    An open source design system for building modern websites and applications.
                </Heading.H2>
                <div className="flex justify-center gap-4 font-semibold">
                    <Link className="px-7 py-3 bg-primary text-primary-foreground rounded-md" href={'/docs'}>
                        Get Started
                    </Link>
                    <Link className="px-7 py-3 border-2 shadow-md rounded-md" href={'/components'}>
                        Components
                    </Link>
                </div>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 place-content-center gap-10">
                <Link href={'/components'}>
                    <Card className="shadow-md hover:shadow-lg hover:scale-105 transition-all ease-in-out duration-500 border-2">
                        <CardHeader className="flex flex-row items-center">
                            <ComponentIcon className="w-6 h-6" />
                            <CardTitle className="ml-3 font-bold">Components</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>Ever-increasing list of concise and aesthetic components.</CardDescription>
                        </CardContent>
                    </Card>
                </Link>
                <Link href={'/'}>
                    <Card className="shadow-md hover:shadow-lg hover:scale-105 transition-all ease-in-out duration-500 border-2">
                        <CardHeader className="flex flex-row items-center">
                            <PenToolIcon className="w-6 h-6" />
                            <CardTitle className="ml-3 font-bold">Customizable</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>Configure sizes, colors, appearances, shapes, and more.</CardDescription>
                        </CardContent>
                    </Card>
                </Link>
                <Link href={'https://github.com/neplextech/edge-ui'} target="_blank">
                    <Card className="shadow-md hover:shadow-lg hover:scale-105 transition-all ease-in-out duration-500 border-2">
                        <CardHeader className="flex flex-row items-center">
                            <GitHubIcon className="w-6 h-6" />
                            <CardTitle className="ml-3 font-bold">Open Sourced</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>
                                Geist is open sourced and available free under MIT license.
                            </CardDescription>
                        </CardContent>
                    </Card>
                </Link>
            </div>
        </Layout>
    );
}

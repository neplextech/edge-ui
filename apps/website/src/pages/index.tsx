import {
    Heading,
    Layout,
    Card,
    CardHeader,
    CardTitle,
    CardDescription,
    CardContent,
    GitHubIcon,
    Flex
} from '@edge-ui/react';
import Link from 'next/link';
import { ComponentIcon, PenToolIcon } from 'lucide-react';

export default function Home() {
    return (
        <Layout horizontalSpacing={'sm'} verticalSpacing={'md'}>
            <div className="text-center space-y-8 max-w-[850px] mx-auto">
                <Heading.H1 className="lg:text-7xl">EdgeUI</Heading.H1>
                <Heading.H2 className="text-muted-foreground">
                    Minimal UI components library for building modern websites and applications using React.
                </Heading.H2>
                <Flex justify="center" gap="md" className="flex-wrap font-semibold">
                    <Link className="px-7 py-3 bg-primary text-primary-foreground rounded-md" href={'/docs'}>
                        Get Started
                    </Link>
                    <Link className="px-7 py-3 border-2 shadow-md rounded-md" href={'/components'}>
                        Components
                    </Link>
                </Flex>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 place-content-center gap-10">
                <Link href={'/components'}>
                    <Card className="shadow-md hover:shadow-lg hover:scale-105 transition-all ease-in-out duration-500 border-2">
                        <CardHeader>
                            <div className="flex flex-row items-center">
                                <ComponentIcon className="w-6 h-6" />
                                <CardTitle className="ml-3 font-bold">Components</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>
                                EdgeUI offers ever-increasing list of concise and minimal components.
                            </CardDescription>
                        </CardContent>
                    </Card>
                </Link>
                <Link href={'/'}>
                    <Card className="shadow-md hover:shadow-lg hover:scale-105 transition-all ease-in-out duration-500 border-2">
                        <CardHeader>
                            <div className="flex flex-row items-center">
                                <PenToolIcon className="w-6 h-6" />
                                <CardTitle className="ml-3 font-bold">Customizable</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>
                                EdgeUI allows you to configure sizes, colors, appearances, shapes, and more.
                            </CardDescription>
                        </CardContent>
                    </Card>
                </Link>
                <Link href={'https://github.com/neplextech/edge-ui'} target="_blank">
                    <Card className="shadow-md hover:shadow-lg hover:scale-105 transition-all ease-in-out duration-500 border-2">
                        <CardHeader>
                            <div className="flex flex-row items-center">
                                <GitHubIcon className="w-6 h-6" />
                                <CardTitle className="ml-3 font-bold">Open Source</CardTitle>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <CardDescription>
                                EdgeUI is a free and open source project licensed under MIT License.
                            </CardDescription>
                        </CardContent>
                    </Card>
                </Link>
            </div>
        </Layout>
    );
}

import { Button, Heading, Paragraph } from '@edge-ui/react';
import Navbar from '../components/navbar';

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="my-5 px-[12.8rem]">
                <Heading>Edge UI</Heading>
                <Paragraph className="text-xl">Minimal ui components for React</Paragraph>
                <div className="flex flex-row gap-2 mt-4">
                    <Button>Get Started</Button>
                    <Button variant="outline">Components</Button>
                </div>
            </main>
        </>
    );
}

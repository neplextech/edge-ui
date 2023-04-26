import { Button, CodeBlock, Heading, Paragraph } from '@edge-ui/react';
import Navbar from '../components/navbar';

const exampleCode = `import { EdgeUIProvider } from '@edge-ui/react';

// root
export default function Application({ Component, pageProps }: AppProps) {
    return (
        <EdgeUIProvider>
            <Component {...pageProps} />
        </EdgeUIProvider>
    );
}

// some other component
import { Heading, Button } from '@edge-ui/react';

export function MyComponent() {
    const [count, setCount] = useState(0);

    const counter = () => {
        setCount(p => p + 1);
    };

    return (
        <div>
            <Heading>Count: {count}</Heading>
            <Button onClick={counter}>
                Click Me!
            </Button>
        </div>
    );
}`;

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="my-5 px-[12.8rem]">
                <Heading>Edge UI</Heading>
                <Paragraph className="text-xl">Minimal ui components for React</Paragraph>
                <div className="flex flex-row gap-2 my-4">
                    <Button>Get Started</Button>
                    <Button variant="outline">Components</Button>
                </div>
                <div>
                    <div className="mb-4">
                        <Heading size="h4">Installation</Heading>
                        <CodeBlock language="pwsh">{'npm install -D @edge-ui/react'}</CodeBlock>
                    </div>
                    <div>
                        <Heading size="h4">Example</Heading>
                        <CodeBlock lines language="typescript">
                            {exampleCode}
                        </CodeBlock>
                    </div>
                </div>
            </main>
        </>
    );
}

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
        <main className="my-5 px-[12.8rem]">
            <Heading.H1>Edge UI</Heading.H1>
            <Paragraph className="text-xl">Minimal ui components for React</Paragraph>
            <div className="flex flex-row gap-2 my-4">
                <Button>Get Started</Button>
                <Button variant="outline">Components</Button>
            </div>
            <div className="my-3">
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
            <div>
                <Heading.H1 bordered>Typography</Heading.H1>
                <Heading.H2 bordered>Typography</Heading.H2>
                <Heading.H3 bordered>Typography</Heading.H3>
                <Heading.H4 bordered>Typography</Heading.H4>
                <Heading.H5 bordered>Typography</Heading.H5>
                <Heading.H6 bordered>Typography</Heading.H6>
            </div>
        </main>
    );
}

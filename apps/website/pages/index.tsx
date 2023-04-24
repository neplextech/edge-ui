import { Button, Heading, Alert, AlertTitle, AlertDescription } from '@edge-ui/react';
import { useState } from 'react';
import { Terminal } from 'lucide-react';

export default function Home() {
    const [count, setCount] = useState(0);

    return (
        <div className="grid place-items-center h-screen">
            <div className="space-y-10">
                <Heading>Clicked {count.toLocaleString()} times</Heading>
                <Alert>
                    <Terminal className="h-4 w-4" />
                    <AlertTitle>Hello!</AlertTitle>
                    <AlertDescription>This website is built with EdgeUI.</AlertDescription>
                </Alert>
                <Button className="w-full" onClick={() => setCount((prev) => prev + 1)}>
                    Click Me!
                </Button>
            </div>
        </div>
    );
}

import { Button } from '@edge-ui/react';
import { useState } from 'react';

export default function Home() {
    const [count, setCount] = useState(0);

    return (
        <div className="grid place-items-center mt-5 space-y-10">
            <p className="text-5xl font-semibold">Clicked {count.toLocaleString()} times</p>
            <p className="text-gray-500">Built with edge-ui</p>
            <Button onClick={() => setCount((prev) => prev + 1)}>Click Me!</Button>
        </div>
    );
}

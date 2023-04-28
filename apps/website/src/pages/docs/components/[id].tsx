import { Heading, Separator, Button, CodeBlock } from '@edge-ui/react';
import React from 'react';

// just a mockup for styling purpose, docs shall be rendered dynamically
export default function Components() {
    return (
        <div className="">
            <Heading>Button</Heading>
            <Heading size="h4" className="font-semibold text-muted-foreground">
                Displays a button or a component that looks like a button.
            </Heading>
            <Separator orientation="horizontal" className="my-3" />
            <div className="flex flex-row space-x-4">
                {(['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'] as const).map((m, i) => {
                    return (
                        <Button key={i} variant={m}>
                            {`${m[0].toUpperCase()}${m.slice(1).toLowerCase()}`}
                        </Button>
                    );
                })}
            </div>
            <Separator orientation="horizontal" className="my-3" />
            <Heading size="h3" className="my-2">
                Example
            </Heading>
            <CodeBlock lines language="typescript">
                {[
                    "import { Button, Heading } from '@edge-ui/react';",
                    "import { useState } from 'react'",
                    '',
                    'export default function Component() {',
                    '\tconst [count, setCount] = useState(0);',
                    '',
                    '\treturn (',
                    '\t\t<>',
                    '\t\t\t<Heading>Current: {count}</Heading>',
                    '\t\t\t<Button onClick={() => setCount(p => p + 1)}>Count</Button>',
                    '\t\t</>',
                    '\t);',
                    '}'
                ].join('\n')}
            </CodeBlock>
        </div>
    );
}

import React from 'react';
import { Code, CodeBlock, Heading } from '@edge-ui/react';

const code = `import fs from 'node:fs';

const textStream = fs.createReadStream('./example.txt');
textStream.pipe(process.stdout);`;

export function CodeBlockExample() {
    return (
        <div className="border p-3 rounded-md flex flex-col gap-3">
            <div className="border mb-3 rounded-md p-3">
                <Heading.H1>Code Block</Heading.H1>
                <CodeBlock lines language="js">
                    {code}
                </CodeBlock>
            </div>
            <div className="border mb-3 rounded-md p-3">
                <Code>Inline Code</Code>
            </div>
        </div>
    );
}

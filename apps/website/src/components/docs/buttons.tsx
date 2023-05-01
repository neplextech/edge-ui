import React from 'react';
import { Button, Heading } from '@edge-ui/react';

export function Buttons() {
    return (
        <div className="border p-3 rounded-md flex flex-col gap-3">
            <Heading.H4>Variants</Heading.H4>
            <div className="flex flex-col lg:flex-row gap-4 border p-3 rounded-md">
                {(['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'] as const).map((m, i) => {
                    return (
                        <Button key={i} variant={m}>
                            {`${m[0].toUpperCase()}${m.slice(1).toLowerCase()}`}
                        </Button>
                    );
                })}
            </div>
            <Heading.H4>Size</Heading.H4>
            <div className="flex flex-col lg:flex-row gap-4 border p-3 rounded-md">
                {(['sm', 'default', 'lg'] as const).map((m, i) => {
                    return (
                        <Button key={i} size={m}>
                            {m}
                        </Button>
                    );
                })}
            </div>
        </div>
    );
}

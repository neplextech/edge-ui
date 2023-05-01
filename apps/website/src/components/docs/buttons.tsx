import React from 'react';
import { Button } from '@edge-ui/react';

export function Buttons() {
    return (
        <div className="flex flex-wrap gap-y-6 gap-x-4 border p-3 rounded-md">
            {(['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'] as const).map((m, i) => {
                return (
                    <Button key={i} variant={m}>
                        {`${m[0].toUpperCase()}${m.slice(1).toLowerCase()}`}
                    </Button>
                );
            })}
        </div>
    );
}

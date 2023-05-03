import React from 'react';
import { Badge } from '@edge-ui/react';

export function Badges() {
    return (
        <div className="border p-3 rounded-md flex flex-row gap-3 overflow-x-auto">
            {(['default', 'destructive', 'outline', 'secondary'] as const).map((m, i) => {
                return (
                    <Badge key={i} variant={m}>
                        {`${m[0].toUpperCase()}${m.slice(1).toLowerCase()}`}
                    </Badge>
                );
            })}
        </div>
    );
}

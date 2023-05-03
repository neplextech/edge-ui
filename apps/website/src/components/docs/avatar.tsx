import React from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@edge-ui/react';

export function AvatarExample() {
    return (
        <div className="border p-3 rounded-md gap-3 flex flex-row">
            <Avatar>
                <AvatarImage src="https://github.com/neplextech.png" alt="@neplextech" />
                <AvatarFallback>NT</AvatarFallback>
            </Avatar>
            <Avatar>
                <AvatarImage src="/invalid-image" alt="@neplextech" />
                <AvatarFallback>NT</AvatarFallback>
            </Avatar>
        </div>
    );
}

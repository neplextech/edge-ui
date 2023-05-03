import React from 'react';
import { cn } from '../../utility';

export function Code(props: React.HTMLAttributes<HTMLHeadingElement>) {
    return (
        <code {...props} className={cn('bg-muted text-primary mx-1 px-1 rounded-md', props.className)}>
            {props.children}
        </code>
    );
}

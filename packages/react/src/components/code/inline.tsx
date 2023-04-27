import React from 'react';
import { cn } from '../../utility';

export function Code(props: React.HTMLAttributes<HTMLHeadingElement>) {
    return (
        <code {...props} className={cn('bg-muted-DEFAULT text-primary', props.className)}>
            {props.children}
        </code>
    );
}

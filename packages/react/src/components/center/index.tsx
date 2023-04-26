'use client';

import * as React from 'react';
import { cn } from '../../utility';

interface Props extends React.HTMLProps<HTMLDivElement> {
    horizontal?: boolean;
    vertical?: boolean;
}

const Center = React.forwardRef<HTMLDivElement, Props>(({ vertical, horizontal, className, ...props }, ref) => {
    let style = 'justify-center items-center';

    if (!horizontal && vertical) style = 'items-center';
    if (horizontal && !vertical) style = 'justify-center';

    return <div ref={ref} className={cn('flex h-screen w-screen', style, className)} {...props} />;
});

Center.displayName = 'Center';

export { Center };

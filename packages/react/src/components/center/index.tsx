'use client';

import * as React from 'react';
import { cn } from '../../utility';
import { cva, type VariantProps } from 'class-variance-authority';

const centerProps = cva(['flex'], {
    variants: {
        align: {
            horizontal: 'items-center',
            vertical: 'justify-center',
            both: 'items-center justify-center'
        }
    },
    defaultVariants: {
        align: 'both'
    }
});

interface Props extends React.HTMLProps<HTMLDivElement>, VariantProps<typeof centerProps> {}

const Center = React.forwardRef<HTMLDivElement, Props>(({ className, align, ...props }, ref) => {
    return <div ref={ref} className={cn(centerProps({ align }), className)} {...props} />;
});

Center.displayName = 'Center';

export { Center };

import * as React from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '../../utility';

const layoutVariants = cva('w-[90%] sm:w-[85%] mx-auto my-16', {
    variants: {
        horizontalSpacing: {
            sm: 'md:w-[80%]',
            md: 'md:w-[70%]'
        },
        verticalSpacing: {
            default: 'space-y-16',
            sm: 'space-y-20',
            md: 'space-y-24',
            lg: 'space-y-28'
        }
    },
    defaultVariants: {
        verticalSpacing: 'default'
    }
});

export interface LayoutProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof layoutVariants> {}

const Layout = ({ className, horizontalSpacing, verticalSpacing, ...props }: LayoutProps) => {
    return <main className={cn(layoutVariants({ verticalSpacing, horizontalSpacing, className }))} {...props} />;
};

Layout.displayName = 'Layout';
export { Layout, layoutVariants };

import * as React from 'react';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '../../utility';

const layoutVariants = cva('', {
    variants: {
        horizontalSpacing: {
            default: 'px-7',
            sm: 'px-7 md:px-10 lg:px-14',
            md: 'px-10 md:px-14 lg:px-16',
            lg: 'px-14 lg:px-16'
        },
        verticalSpacing: {
            default: 'space-y-16',
            sm: 'space-y-20',
            md: 'space-y-24',
            lg: 'space-y-28'
        }
    },
    defaultVariants: {
        verticalSpacing: 'default',
        horizontalSpacing: 'default'
    }
});

export interface LayoutProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof layoutVariants> {}

const Layout = ({ className, horizontalSpacing, verticalSpacing, ...props }: LayoutProps) => {
    return <main className={cn(layoutVariants({ verticalSpacing, horizontalSpacing, className }))} {...props} />;
};

Layout.displayName = 'Layout';
export { Layout, layoutVariants };

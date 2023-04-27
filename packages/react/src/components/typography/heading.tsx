import React from 'react';
import { cn } from '../../utility';
import { VariantProps, cva } from 'class-variance-authority';

const headingVariants = cva(['scroll-m-20', 'tracking-tight'], {
    variants: {
        size: {
            h1: 'text-3xl font-extrabold lg:text-5xl',
            h2: 'border-b pb-2 text-2xl font-semibold transition-colors first:mt-0',
            h3: 'text-xl font-semibold',
            h4: 'text-lg font-semibold',
            h5: 'text-base font-medium',
            h6: 'text-sm font-medium'
        }
    },
    defaultVariants: {
        size: 'h1'
    }
});

export interface HeadingProps
    extends React.HTMLAttributes<HTMLHeadingElement>,
        VariantProps<typeof headingVariants>,
        React.PropsWithChildren {}

export function Heading({ className, children, size = 'h1', ...rest }: HeadingProps) {
    const clx = cn(headingVariants({ size }), className);

    switch (size) {
        case 'h1':
            return (
                <h1 {...rest} className={clx}>
                    {children}
                </h1>
            );
        case 'h2':
            return (
                <h2 {...rest} className={clx}>
                    {children}
                </h2>
            );
        case 'h3':
            return (
                <h3 {...rest} className={clx}>
                    {children}
                </h3>
            );
        case 'h4':
            return (
                <h4 {...rest} className={clx}>
                    {children}
                </h4>
            );
        case 'h5':
            return (
                <h5 {...rest} className={clx}>
                    {children}
                </h5>
            );
        case 'h6':
            return (
                <h6 {...rest} className={clx}>
                    {children}
                </h6>
            );
        default:
            throw new TypeError(`invalid size ${size}`);
    }
}

type StaticHeadingProps = Omit<HeadingProps, 'size'>;

Heading.H1 = function (props: StaticHeadingProps) {
    return <Heading {...props} size="h1" />;
};

Heading.H2 = function (props: StaticHeadingProps) {
    return <Heading {...props} size="h2" />;
};

Heading.H3 = function (props: StaticHeadingProps) {
    return <Heading {...props} size="h3" />;
};

Heading.H4 = function (props: StaticHeadingProps) {
    return <Heading {...props} size="h4" />;
};

Heading.H5 = function (props: StaticHeadingProps) {
    return <Heading {...props} size="h5" />;
};

Heading.H6 = function (props: StaticHeadingProps) {
    return <Heading {...props} size="h6" />;
};
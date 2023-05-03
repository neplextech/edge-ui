import React from 'react';
import { cn } from '../../utility';
import { VariantProps, cva } from 'class-variance-authority';

const headingVariants = cva(['scroll-m-20', 'tracking-tight'], {
    variants: {
        size: {
            h1: 'text-4xl font-extrabold',
            h2: 'text-3xl font-bold',
            h3: 'text-2xl font-semibold',
            h4: 'text-xl font-semibold',
            h5: 'text-lg font-medium',
            h6: 'text-base font-medium'
        }
    },
    defaultVariants: {
        size: 'h1'
    }
});

export interface HeadingProps
    extends React.HTMLAttributes<HTMLHeadingElement>,
        VariantProps<typeof headingVariants>,
        React.PropsWithChildren {
    bordered?: boolean;
}

export function Heading({ className, children, size = 'h1', bordered = false, ...rest }: HeadingProps) {
    const clx = cn(headingVariants({ size }), bordered ? 'border-b pb-2' : null, className);

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

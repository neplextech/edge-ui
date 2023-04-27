import React from 'react';
import { cn } from '../../utility';
import { cva, type VariantProps } from 'class-variance-authority';

const flexVariants = cva(['flex'], {
    variants: {
        direction: {
            row: 'flex-row',
            col: 'flex-col',
            'row-reverse': 'flex-row-reverse',
            'col-reverse': 'flex-col-reverse'
        },
        justify: {
            start: 'justify-start',
            center: 'justify-center',
            end: 'justify-end',
            between: 'justify-between',
            around: 'justify-around',
            evenly: 'justify-evenly'
        },
        align: {
            start: 'items-start',
            center: 'items-center',
            end: 'items-end'
        },
        gap: {
            xs: 'gap-1',
            sm: 'gap-2',
            md: 'gap-5',
            lg: 'gap-7',
            xl: 'gap-10'
        }
    }
});

export interface FlexProps extends VariantProps<typeof flexVariants>, React.HTMLAttributes<HTMLDivElement> {}

export function Flex({ className, children, align, direction, gap, justify, ...props }: FlexProps) {
    return (
        <div
            {...props}
            className={cn(
                flexVariants({
                    align,
                    direction,
                    gap,
                    justify
                }),
                className
            )}
        >
            {children}
        </div>
    );
}

'use client';

import * as React from 'react';
import * as SliderPrimitive from '@radix-ui/react-slider';
import { cn } from '../../utility';

interface Props {
    trackClassName?: string;
    thumbClassName?: string;
    rangeClassName?: string;
}

const Slider = React.forwardRef<
    React.ElementRef<typeof SliderPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof SliderPrimitive.Root> & Props
>(({ className, trackClassName, thumbClassName, rangeClassName, value, ...props }, ref) => (
    <SliderPrimitive.Root
        ref={ref}
        className={cn('relative flex h-1.5 rounded-full w-44 items-center cursor-pointer', className)}
        {...props}
    >
        <SliderPrimitive.Track
            className={cn('bg-secondary h-1 w-full relative flex-grow rounded-full', trackClassName)}
        >
            <SliderPrimitive.Range
                className={cn('bg-primary range grow absolute h-full  rounded-full', rangeClassName)}
            />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb
            className={cn(
                'block bg-primary thumb w-4 h-4 rounded-full cursor-grab focus:scale-110 hover:scale-110',
                thumbClassName
            )}
        />
    </SliderPrimitive.Root>
));
Slider.displayName = SliderPrimitive.Root.displayName;

export { Slider };

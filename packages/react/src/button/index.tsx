import React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { twMerge } from 'tailwind-merge';


const variants = cva(['rounded-md', 'hover:outline', 'hover:outline-1'], {
    variants: {
        variant: {
            primary: ['text-light', 'bg-dark', 'hover:text-dark', 'hover:bg-gray-50', 'hover:outline-dark'],
            secondary: ['text-dark', 'bg-light', 'hover:outline-dark'],
            success: ['text-light', 'bg-success', 'hover:outline-success'],
            danger: ['text-light', 'bg-danger', 'hover:outline-danger'],
            warning: ['text-light', 'bg-warning', 'hover:outline-warning'],
            info: ['text-light', 'bg-info', 'hover:outline-info']
        },
        size: {
            small: ['text-sm', 'p-1'],
            medium: ['text-md', 'p-3'],
            large: ['text-lg', 'p-4'],
            extraLarge: ['text-xl', 'p-4']
        }
    },
    defaultVariants: {
        variant: 'primary',
        size: 'medium'
    }
});

export interface ButtonVariants extends VariantProps<typeof variants> {}

export function Button(props: ButtonVariants & React.ButtonHTMLAttributes<HTMLButtonElement>) {
    const { children, className, size, variant, ...attributes } = props;

    return (
        <button
            {...attributes}
            className={twMerge(variants({ className, size, variant}))}
        >
            {children}
        </button>
    );
}

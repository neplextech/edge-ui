import React from 'react';
import { cn } from '../../utility';
import { GenericTypographyProps } from './common';

export function Paragraph({ children, className }: GenericTypographyProps) {
    return <p className={cn('leading-7 [&:not(:first-child)]:mt-6', className)}>{children}</p>;
}

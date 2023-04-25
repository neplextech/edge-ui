import React from 'react';
import { cn } from '../../utility';
import { GenericTypographyProps } from './common';

export function Blockquote({ children, className }: GenericTypographyProps) {
    return <blockquote className={cn('mt-6 border-l-2 pl-6 italic', className)}>{children}</blockquote>;
}

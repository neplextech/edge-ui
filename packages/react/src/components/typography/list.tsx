import React from 'react';
import { GenericTypographyProps } from './common';
import { cn } from '../utility';

export function List({ children, className }: GenericTypographyProps) {
    return <ul className={cn('my-6 ml-6 list-disc [&>li]:mt-2', className)}>{children}</ul>;
}

export function ListItem({ children, className }: GenericTypographyProps) {
    return <li className={className}>{children}</li>;
}

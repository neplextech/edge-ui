import React from 'react';
import { Heading, HeadingProps, Paragraph, CodeBlock } from '@edge-ui/react';
import ResponsiveImage from '../image/responsiveImage';
import type { useMDXComponents } from '@mdx-js/react';

export const mdxComponents: ReturnType<typeof useMDXComponents> = {
    // @ts-expect-error
    image: ResponsiveImage,
    p: Paragraph,
    h1: (props: HeadingProps) => <Heading size="h1">{props.children}</Heading>,
    h2: (props: HeadingProps) => <Heading size="h2">{props.children}</Heading>,
    h3: (props: HeadingProps) => <Heading size="h3">{props.children}</Heading>,
    h4: (props: HeadingProps) => <Heading size="h4">{props.children}</Heading>
};

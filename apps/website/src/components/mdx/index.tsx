import { Heading, Paragraph } from '@edge-ui/react';
import ResponsiveImage from '../image/responsiveImage';
import type { useMDXComponents } from '@mdx-js/react';

export const mdxComponents: ReturnType<typeof useMDXComponents> = {
    // @ts-expect-error
    image: ResponsiveImage,
    p: Paragraph,
    h1: Heading.H1,
    h2: Heading.H2,
    h3: Heading.H3,
    h4: Heading.H4,
    h5: Heading.H5,
    h6: Heading.H6
};

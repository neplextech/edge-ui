import { Heading, Paragraph } from '@edge-ui/react';
import ResponsiveImage from '../image/responsiveImage';
import type { useMDXComponents } from '@mdx-js/react';

export const mdxComponents: ReturnType<typeof useMDXComponents> = {
    p: (props: any) => <Paragraph {...props} />,
    h1: (props: any) => <Heading.H1 {...props} />,
    h2: (props: any) => <Heading.H2 {...props} />,
    h3: (props: any) => <Heading.H3 {...props} />,
    h4: (props: any) => <Heading.H4 {...props} />,
    h5: (props: any) => <Heading.H5 {...props} />,
    h6: (props: any) => <Heading.H6 {...props} />
};

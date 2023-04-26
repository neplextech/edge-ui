import React from 'react';
import { Highlight, Prism as PrismReact, themes } from 'prism-react-renderer';
import { useTheme } from '../../hooks';
import { cn } from '../../utility';

export interface CodeBlockProps extends React.PropsWithChildren {
    language?: string;
    code: string;
}

export const Prism = PrismReact;

export function CodeBlock({ language, code }: CodeBlockProps) {
    const { isDark } = useTheme();

    return (
        <Highlight language={language || 'text'} theme={isDark ? themes.vsDark : themes.vsLight} code={code}>
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre className={cn('p-2 rounded-md', className)} style={style}>
                    {tokens.map((line, i) => (
                        <div key={i} {...getLineProps({ line })}>
                            <span className="px-2">{i + 1}</span>
                            {line.map((token, key) => (
                                <span key={key} {...getTokenProps({ token })} />
                            ))}
                        </div>
                    ))}
                </pre>
            )}
        </Highlight>
    );
}

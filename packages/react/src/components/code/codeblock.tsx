import React from 'react';
import { Highlight, Prism as PrismReact, themes } from 'prism-react-renderer';
import { useTheme } from '../../hooks';
import { cn } from '../../utility';
import { CopyIcon } from 'lucide-react';
import { useToast } from '../../hooks/useToast';

export interface CodeBlockProps extends React.PropsWithChildren {
    language?: string;
    children: string;
    lines?: boolean;
}

export const Prism = PrismReact;

export function CodeBlock({ language, children, lines }: CodeBlockProps) {
    const { isDark } = useTheme();
    const { toast } = useToast();

    const copyCode = () => {
        navigator.clipboard.writeText(children).then(
            () => {
                toast({
                    title: 'Copied to clipboard!',
                    description: 'The code has been copied to your clipboard!'
                });
            },
            () => {
                toast({
                    title: 'ERROR!',
                    variant: 'destructive',
                    description: 'Failed to copy the code to your clipboard!'
                });
            }
        );
    };

    return (
        <Highlight language={language || 'text'} theme={isDark ? themes.vsDark : themes.github} code={children}>
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <pre className={cn('p-2 rounded-md relative overflow-y-auto', className)} style={style}>
                    <CopyIcon
                        className="absolute right-0 mr-4 hover:cursor-pointer hover:text-gray-500 text-gray-600"
                        onClick={copyCode}
                    />
                    {tokens.map((line, i) => (
                        <div key={i} {...getLineProps({ line })}>
                            {lines && <span className="pr-5 pl-3 select-none text-gray-500">{i + 1}</span>}
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

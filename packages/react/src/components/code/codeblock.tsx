import React from 'react';
import { Highlight, Prism as PrismReact, themes } from 'prism-react-renderer';
import { useTheme } from '../../hooks';
import { cn } from '../../utility';
import { CopyIcon } from 'lucide-react';
import { useToast } from '../../hooks/useToast';
import { Button } from '../button';

export interface CodeBlockProps extends React.PropsWithChildren {
    language?: string;
    children: string;
    lines?: boolean;
    copy?: boolean;
}

export const Prism = PrismReact;

export function CodeBlock({ language, children, lines, copy = true }: CodeBlockProps) {
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
        <Highlight
            language={language || 'text'}
            theme={isDark ? themes.vsDark : themes.github}
            code={String(children).trim()}
        >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <div className={cn('my-3', className, 'relative')}>
                    {copy && (
                        <Button
                            size="sm"
                            variant="secondary"
                            className="absolute top-0 right-0 z-10 m-2 border hover:bg-primary hover:text-primary-foreground"
                            onClick={copyCode}
                        >
                            <CopyIcon className="hover:cursor-pointer h-4 w-4" />
                        </Button>
                    )}
                    <pre className={'p-2 py-4 rounded-md overflow-y-auto'} style={style}>
                        {tokens.map((line, i) => (
                            <div key={i} {...getLineProps({ line })}>
                                {lines && <span className="pr-5 pl-3 select-none text-gray-500">{i + 1}</span>}
                                {line.map((token, key) => (
                                    <span key={key} {...getTokenProps({ token })} />
                                ))}
                            </div>
                        ))}
                    </pre>
                </div>
            )}
        </Highlight>
    );
}

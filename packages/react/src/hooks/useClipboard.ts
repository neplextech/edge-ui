'use client';
import { useCallback, useState } from 'react';

/**
 * Copy text to the clipboard.
 * @returns The copied text and a function to copy text to the clipboard.
 */
export function useClipboard() {
    const [content, setContent] = useState<string | null>(null);

    const copy = useCallback((text: string) => {
        setContent(text);
        return void navigator.clipboard.writeText(text).catch(() => void 0);
    }, []);

    return [content, copy] as const;
}

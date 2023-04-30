import { useState } from 'react';

type CopyTextContentCallback = (newContent: string) => Promise<boolean>;
type ClipboardTextContent = string | null;

export function useClipboard() {
    const [content, setContent] = useState<ClipboardTextContent>(null);

    const copyContent: CopyTextContentCallback = async (newContent: string) => {
        if (!('clipboard' in navigator)) return false;

        try {
            await navigator.clipboard.writeText(newContent);
            setContent(newContent);
            return true;
        } catch {
            setContent(null);
            return false;
        }
    };

    return [content, copyContent] as const;
}

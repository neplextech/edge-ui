// credit: usehooks-ts
import { RefObject, useEffect, useState } from 'react';

interface Args extends IntersectionObserverInit {
    freezeOnceVisible?: boolean;
}

export function useIntersectionObserver(ref: RefObject<Element>, init: Args = {}): IntersectionObserverEntry | null {
    const { threshold = 0, root = null, rootMargin = '0%', freezeOnceVisible = false } = init;

    const [entry, setEntry] = useState<IntersectionObserverEntry | null>(null);

    const frozen = entry?.isIntersecting && freezeOnceVisible;

    const updateEntry = ([entry]: IntersectionObserverEntry[]): void => {
        setEntry(entry);
    };

    useEffect(() => {
        const node = ref?.current;
        const hasIOSupport = !!window.IntersectionObserver;

        if (!hasIOSupport || frozen || !node) return;

        const observerParams = { threshold, root, rootMargin };
        const observer = new IntersectionObserver(updateEntry, observerParams);

        observer.observe(node);

        return () => observer.disconnect();
    }, [ref?.current, JSON.stringify(threshold), root, rootMargin, frozen]);

    return entry;
}

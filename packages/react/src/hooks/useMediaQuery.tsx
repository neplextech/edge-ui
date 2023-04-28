import React from 'react';
import { isBrowser } from '../utility';

export function useMediaQuery(query: string) {
    const [matched, setMatched] = React.useState(() => (isBrowser() ? window.matchMedia(query).matches : false));

    React.useEffect(() => {
        const mediaQueryList = window.matchMedia(query);
        function handleMediaChange({ matches }: MediaQueryListEvent) {
            setMatched(matches);
        }
        const currentMatches = mediaQueryList.matches;

        setMatched(currentMatches);

        mediaQueryList.addEventListener('change', handleMediaChange);

        return () => {
            mediaQueryList.removeEventListener('change', handleMediaChange);
        };
    }, [query]);

    return matched;
}

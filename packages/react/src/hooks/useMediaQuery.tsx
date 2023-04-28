import React from 'react';
import { isBrowser } from '../utility';

export function useMediaQuery(query: string) {
    const [matched, setMatched] = React.useState(() => (isBrowser() ? window.matchMedia(query).matches : false));

    React.useEffect(() => {
        console.log('on window ');
        const mediaQueryList = window.matchMedia(query);
        function handleMediaChange({ matches }: MediaQueryListEvent) {
            setMatched(matches);
        }
        const currentMatches = mediaQueryList.matches;
        console.log('on window ');

        setMatched(currentMatches);
        console.table({ currentMatches });

        mediaQueryList.addEventListener('change', handleMediaChange);

        return () => {
            mediaQueryList.removeEventListener('change', handleMediaChange);
        };
    }, [query]);

    return matched;
}

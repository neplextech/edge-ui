import { useMediaQuery } from './useMediaQuery';

export type Breakpoint = `${'min' | 'max'}-${'width' | 'height'}: ${number}${'px' | 'rem' | 'em'}`;

export function useBreakpoint(breakpoint: Breakpoint) {
    return useMediaQuery(`(${breakpoint})`);
}

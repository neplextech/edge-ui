'use client';
import { useEffect, useState } from 'react';

/**
 * Debounce a value.
 * @param value The value to debounce.
 * @param delay The delay in milliseconds. Defaults to 1000.
 * @returns The debounced value.
 */
export function useDebounce<T>(value: T, delay = 1000): T {
    const [debouncedValue, setDebouncedValue] = useState<T>(value);

    useEffect(() => {
        const handler = setTimeout(() => setDebouncedValue(value), delay);

        return () => clearTimeout(handler);
    }, [value, delay]);

    return debouncedValue;
}

'use client';

import React from 'react';
import { CssBaseline, noop } from '../utility';
import { isBrowser } from '../utility/isBrowser';

export type EdgeUIThemeType = 'dark' | 'light' | 'system' | 'detect';

export interface EdgeUIThemeContext {
    theme: EdgeUIThemeType;
    disableBaseline: boolean;
    fontSans?: string;
}

export const DefaultThemeOptions: EdgeUIThemeContext = {
    theme: 'light',
    disableBaseline: false
};

export type EdgeUIThemeProvider = EdgeUIThemeContext & {
    setTheme: React.Dispatch<React.SetStateAction<EdgeUIThemeType>>;
    setFontSans: React.Dispatch<React.SetStateAction<string | undefined>>;
};

export const ThemeContext = React.createContext<EdgeUIThemeProvider>({
    ...DefaultThemeOptions,
    setTheme: noop,
    setFontSans: noop
});

export interface ThemeProviderOptions extends Partial<EdgeUIThemeContext> {
    children: React.ReactNode;
}

export function EdgeUIProvider(props: ThemeProviderOptions) {
    const { children, ...providerValue } = props;
    const [currentTheme, setCurrentTheme] = React.useState<EdgeUIThemeType>(props.theme || 'detect');
    const [currentFont, setCurrentFont] = React.useState<string | undefined>(props.fontSans);

    React.useEffect(() => {
        if (isBrowser()) {
            if (currentTheme === 'detect') {
                const stored = (window.localStorage.getItem('theme') || 'light') as EdgeUIThemeType;

                setCurrentTheme(['light', 'dark', 'system'].includes(stored) ? stored : 'light');
                return;
            }

            if (currentTheme !== 'system') {
                window.localStorage.setItem('theme', currentTheme);
                document.documentElement.classList.value = currentTheme;
                return;
            }

            const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
            const listener = (e: MediaQueryListEvent | MediaQueryList) => {
                setCurrentTheme(e.matches ? 'dark' : 'light');
            };

            listener(mediaQuery);

            mediaQuery.addEventListener('change', listener);

            return () => mediaQuery.removeEventListener('change', listener);
        }
    }, [currentTheme]);

    return (
        <ThemeContext.Provider
            value={{
                ...DefaultThemeOptions,
                ...providerValue,
                theme: currentTheme,
                setTheme: setCurrentTheme,
                setFontSans: setCurrentFont
            }}
        >
            {!props.disableBaseline && <CssBaseline fontSans={currentFont} />}
            {children}
        </ThemeContext.Provider>
    );
}

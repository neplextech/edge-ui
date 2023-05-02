import React, { useContext } from 'react';
import { EdgeUIThemeType, ThemeContext } from '../context/EdgeUIProvider';

export interface EdgeUIThemeAction {
    isDark: boolean;
    isLight: boolean;
    toggle: () => void;
    theme: EdgeUIThemeType;
    font: string | undefined;
    setTheme: React.Dispatch<React.SetStateAction<EdgeUIThemeType>>;
    setFont: React.Dispatch<React.SetStateAction<string>>;
}

export function useTheme() {
    const { setTheme, theme, setFontSans, fontSans } = useContext(ThemeContext);

    return {
        isDark: theme === 'dark',
        isLight: theme === 'light',
        toggle: () => setTheme((p) => (p === 'light' ? 'dark' : 'light')),
        theme,
        font: fontSans,
        setTheme: setTheme,
        setFont: setFontSans
    };
}

import { useContext } from 'react';
import { ThemeContext } from '../context/EdgeUIProvider';

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

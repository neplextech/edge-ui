import { useContext } from "react";
import { ThemeContext } from "./EdgeUIProvider";

export function useTheme() {
    const themeCtx = useContext(ThemeContext);
    
    return {
        isDark: themeCtx.theme === 'dark',
        isLight: themeCtx.theme === 'light',
        isSystem: themeCtx.theme === 'system'
    };
}
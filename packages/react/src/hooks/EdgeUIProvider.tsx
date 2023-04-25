import React from 'react'
import { CssBaseline } from '../utility';

export type EdgeUIThemeType = 'dark' | 'light' | 'system';

export interface EdgeUIThemeContext {
    theme: EdgeUIThemeType;
    disableBaseline: boolean;
    fontSans?: string;
}

export const DefaultThemeOptions: EdgeUIThemeContext = {
    theme: 'light',
    disableBaseline: false
};

export const ThemeContext = React.createContext<EdgeUIThemeContext>(DefaultThemeOptions);

export interface ThemeProviderOptions extends Partial<EdgeUIThemeContext> {
    children: React.ReactNode;
}

export function EdgeUIProvider(props: ThemeProviderOptions) {
    const { children, ...providerValue } = props;
    
    return (
        <ThemeContext.Provider value={{
            ...DefaultThemeOptions,
            ...providerValue
        }}>
            {!props.disableBaseline && <CssBaseline fontSans={props.fontSans} />}
            {children}
        </ThemeContext.Provider>
    )
}

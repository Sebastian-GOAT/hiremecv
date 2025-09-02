import { useEffect, useState } from 'react';
import ThemeContext from './ThemeContext';
import { type Theme } from './ThemeContext';

export default function ThemeProvider({ children }: { children: React.ReactNode }) {

    const [theme, setTheme] = useState<Theme>('system');

    // Load theme
    useEffect(() => {
        const saved = localStorage.getItem('theme') as Theme | null;
        if (saved)
            setTheme(saved);
        else
            setTheme('system');
    }, []);

    // Update theme
    useEffect(() => {
        const root = document.documentElement;
        const getSystemTheme = () => window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

        const appliedTheme = theme === 'system' ? getSystemTheme() : theme;
        root.className = appliedTheme;
    }, [theme]);

    return (
        <ThemeContext.Provider value={[theme, setTheme]}>
            {children}
        </ThemeContext.Provider>
    );
};
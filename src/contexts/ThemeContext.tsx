import { createContext } from 'react';

export type Theme = 'light' | 'dark' | 'system';

type ThemeContextType = [Theme, React.Dispatch<React.SetStateAction<Theme>>];

const ThemeContext = createContext<ThemeContextType>(['system', () => {}]);

export default ThemeContext;
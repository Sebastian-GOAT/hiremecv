import { createContext } from 'react';
import { type CVData } from '@/types/cvdata';
import defaultData from '@/lib/defaultData';

type ThemeContextType = [CVData, React.Dispatch<React.SetStateAction<CVData>>];

const ThemeContext = createContext<ThemeContextType>([defaultData, () => {}]);

export default ThemeContext;
import { useContext } from 'react';
import CVDataContext from '@/contexts/CVDataContext';

export default function useCVData() {
    return useContext(CVDataContext);
}
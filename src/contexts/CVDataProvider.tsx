import { useEffect, useState } from 'react';
import CVDataContext from './CVDataContext';
import { type CVData } from '@/types/cvdata';
import defaultData from '@/lib/defaultData';

export default function CVDataProvider({ children }: { children: React.ReactNode }) {

    const [data, setData] = useState<CVData>(defaultData);

    // Load
    useEffect(() => {

        const loadedData = localStorage.getItem('cvdata');
        
        if (loadedData)
            setData(JSON.parse(loadedData));

    }, []);

    // Update
    useEffect(() => {

        localStorage.setItem('cvdata', JSON.stringify(data));

    }, [data]);

    return (
        <CVDataContext.Provider value={[data, setData]}>
            {children}
        </CVDataContext.Provider>
    );
};
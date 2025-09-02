import { useEffect, useState } from 'react';
import { type CVData } from '@/types/cvdata';
import defaultData from '@/lib/defaultData';

export default function useCVData() {

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

    return [data, setData];

}
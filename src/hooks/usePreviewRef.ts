import { useContext } from 'react';
import PreviewRefContext from '@/contexts/PreviewRefContext';

export default function usePreviewRef() {

    const ctx = useContext(PreviewRefContext);
    if (!ctx) throw new Error('useCVRef must be used within CVRefProvider');

    return ctx;
};
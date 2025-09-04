import { useRef } from 'react';
import PreviewRefContext from './PreviewRefContext';

export default function PreviewRefProvider({ children }: { children: React.ReactNode }) {

    const previewRef = useRef<HTMLDivElement>(null);

    return (
        <PreviewRefContext.Provider value={previewRef}>
            {children}
        </PreviewRefContext.Provider>
    );
};
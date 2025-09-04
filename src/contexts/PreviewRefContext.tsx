import { createContext, type RefObject } from 'react';

const PreviewRefContext = createContext<RefObject<HTMLDivElement | null> | null>(null);

export default PreviewRefContext;
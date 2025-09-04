import usePreviewRef from '@/hooks/usePreviewRef';
import { type ReactElement } from 'react';

export default function Preview({ component }: { component: ReactElement }) {

    const previewRef = usePreviewRef();

    return (
        <div
            ref={previewRef}
            className='w-[min(550px,_100%)] h-fit min-h-[100px] bg-white text-black shadow-[0px_0px_10px_1px_rgba(0,_0,_0,_0.1)] rounded-lg'
        >
            {component}
        </div>
    );
}
import { type ReactElement } from 'react';

export default function Preview({ component }: { component: ReactElement }) {

    return (
        <div className='w-[min(550px,_100%)] min-h-[calc(min(550px,_100%)_*_297_/_210)] bg-white text-black shadow-[0px_0px_10px_1px_rgba(0,_0,_0,_0.1)] rounded-lg'>
            {component}
        </div>
    );
}
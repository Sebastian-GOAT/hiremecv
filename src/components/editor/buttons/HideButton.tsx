import { EyeOff } from 'lucide-react';

export default function HideButton() {

    function hide() {

    }

    return (
        <button
            className='p-1 bg-[var(--destructive)] cursor-pointer rounded-sm transition'
            onClick={hide}
        >
            <EyeOff size={16} />
        </button>
    );
}
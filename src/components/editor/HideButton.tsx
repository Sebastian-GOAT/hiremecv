import { Trash2 } from 'lucide-react';

export default function HideButton() {

    function hide() {

    }

    return (
        <button
            className='p-1 bg-[var(--destructive)] cursor-pointer rounded-sm transition'
            onClick={hide}
        >
            <Trash2 size={16} />
        </button>
    );
}
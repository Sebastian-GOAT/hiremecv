import { Trash2 } from 'lucide-react';

export default function DeleteButton({ setter }: { setter: () => void; }) {

    return (
        <button
            className='p-1 bg-[var(--destructive)] cursor-pointer rounded-sm transition'
            onClick={setter}
        >
            <Trash2 size={16} />
        </button>
    );
}
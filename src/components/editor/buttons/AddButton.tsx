import { Plus } from 'lucide-react';

export default function AddButton({ setter }: { setter: () => void; }) {

    return (
        <button
            className='p-1 bg-[var(--generative)] cursor-pointer rounded-sm transition'
            onClick={setter}
        >
            <Plus size={16} />
        </button>
    );
}
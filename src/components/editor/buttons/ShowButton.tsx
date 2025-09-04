import { Eye } from 'lucide-react';

export default function ShowButton({ onClick }: { onClick: () => void; }) {

    return (
        <button
            className='p-1 bg-[var(--generative)] cursor-pointer rounded-sm transition'
            onClick={onClick}
        >
            <Eye size={16} />
        </button>
    );
}
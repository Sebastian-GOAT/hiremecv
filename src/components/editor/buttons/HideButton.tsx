import { EyeOff } from 'lucide-react';

export default function HideButton({ onClick }: { onClick: () => void; }) {

    return (
        <button
            className='p-1 bg-[var(--destructive)] cursor-pointer rounded-sm transition'
            onClick={onClick}
        >
            <EyeOff size={16} />
        </button>
    );
}
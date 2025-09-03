import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

export default function DownButton({ onClick }: { onClick: () => void; }) {

    return (
        <Button
            variant='outline'
            className='w-6 h-6 cursor-pointer rounded-sm transition'
            onClick={onClick}
        >
            <ChevronDown size={16} />
        </Button>
    );
}
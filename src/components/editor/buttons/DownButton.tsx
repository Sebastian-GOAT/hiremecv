import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

export default function DownButton({ disabled }: { disabled: boolean; }) {

    function moveDown() {

    }

    return (
        <Button
            variant='outline'
            className='w-6 h-6 cursor-pointer rounded-sm transition'
            disabled={disabled}
            onClick={moveDown}
        >
            <ChevronDown size={16} />
        </Button>
    );
}
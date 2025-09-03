import { Button } from '@/components/ui/button';
import { ChevronUp } from 'lucide-react';

export default function UpButton({ disabled }: { disabled: boolean; }) {

    function moveUp() {

    }

    return (
        <Button
            variant='outline'
            className='w-6 h-6 cursor-pointer rounded-sm transition'
            disabled={disabled}
            onClick={moveUp}
        >
            <ChevronUp size={16} />
        </Button>
    );
}
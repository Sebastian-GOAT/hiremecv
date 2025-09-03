import { Button } from '@/components/ui/button';
import { ChevronUp } from 'lucide-react';

export default function UpButton({ onClick }: { onClick: () => void; }) {

    return (
        <Button
            variant='outline'
            className='w-6 h-6 cursor-pointer rounded-sm transition'
            onClick={onClick}
        >
            <ChevronUp size={16} />
        </Button>
    );
}
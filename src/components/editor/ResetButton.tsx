import { RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function ResetButton() {

    function resetCVData() {

    }

    return (
        <Button
            variant='destructive'
            size='sm'
            className='cursor-pointer'
            onClick={resetCVData}
        >
            <RotateCcw size={18} />
        </Button>
    );
}
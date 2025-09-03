import { RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ResetAlert } from '../ResetAlert';

import useCVData from '@/hooks/useCVData';
import defaultData from '@/lib/defaultData';

export default function ResetButton() {

    const [, setData] = useCVData();

    function resetCVData() {
        setData(defaultData);
    }

    return (
        <ResetAlert onClick={resetCVData}>
            <Button
                variant='destructive'
                size='sm'
                className='cursor-pointer'
            >
                <RotateCcw size={18} />
            </Button>
        </ResetAlert>
    );
}
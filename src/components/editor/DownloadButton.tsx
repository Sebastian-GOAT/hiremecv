import { Button } from '@/components/ui/button';
import { ArrowDownToLine } from 'lucide-react';

export default function DownloadButton() {

    function downloadCV() {

    }

    return (
        <Button
            variant='outline'
            size='sm'
            className='cursor-pointer'
            onClick={downloadCV}
        >
            <ArrowDownToLine size={18} />
        </Button>
    );
}
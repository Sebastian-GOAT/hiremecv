import { Button } from '@/components/ui/button';
import { Printer } from 'lucide-react';
import { useReactToPrint } from 'react-to-print';
import usePreviewRef from '@/hooks/usePreviewRef';

export default function PrintButton() {

    const previewRef = usePreviewRef();

    const handlePrint = useReactToPrint({
        contentRef: previewRef,
        documentTitle: 'my-resume'
    });

    function printCV() {
        if (!previewRef.current) return;
        handlePrint();
    }

    return (
        <Button
            variant='outline'
            size='sm'
            className='cursor-pointer'
            onClick={printCV}
        >
            <Printer size={18} />
        </Button>
    );
}
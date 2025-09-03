import { Textarea } from '@/components/ui/textarea';
import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from '@/components/ui/accordion';
import useCVData from '@/hooks/useCVData';

import UpButton from '../UpButton';
import DownButton from '../buttons/DownButton';
import HideButton from '../buttons/HideButton';

export default function Summary() {

    const [data, setData] = useCVData();

    function handleSummaryUpdate(e: React.ChangeEvent<HTMLTextAreaElement>) {
        setData(prev => ({ ...prev, summary: e.target.value }));
    }

    return (
        <div className='flex items-center gap-4'>
            <AccordionItem value='summary' className='flex-1'>
                <AccordionTrigger className='cursor-pointer'>Summary</AccordionTrigger>
                <AccordionContent>

                    {/* Summary (text) */} 
                    <Textarea
                        placeholder='Summary'
                        value={data.summary}
                        onChange={handleSummaryUpdate}
                    />

                </AccordionContent>
            </AccordionItem>
            <div className='flex gap-1'>
                <UpButton  disabled={false} />
                <DownButton disabled={true} />
                <HideButton />
            </div>
        </div>
    );
}
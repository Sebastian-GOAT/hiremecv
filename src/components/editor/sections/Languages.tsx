import { Input } from '@/components/ui/input';
import useCVData from '@/hooks/useCVData';

import UpButton from '../UpButton';
import DownButton from '../buttons/DownButton';
import HideButton from '../buttons/HideButton';

import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from '@/components/ui/accordion';

export default function Languages() {

    return (
        <div className='flex items-center gap-4'>
            <AccordionItem value='languages' className='flex-1'>
                <AccordionTrigger className='cursor-pointer'>Languages</AccordionTrigger>
                <AccordionContent>

                </AccordionContent>
            </AccordionItem>
            <div className='flex gap-1'>
                <UpButton  disabled={false} />
                <DownButton disabled={false} />
                <HideButton />
            </div>
        </div>
    );
}
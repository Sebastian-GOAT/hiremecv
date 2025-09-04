import { type MoveSection } from '@/types/movesection';

import { Textarea } from '@/components/ui/textarea';
import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from '@/components/ui/accordion';
import useCVData from '@/hooks/useCVData';

import UpButton from '../buttons/UpButton';
import DownButton from '../buttons/DownButton';
import HideButton from '../buttons/HideButton';
import ShowButton from '../buttons/ShowButton';

export default function Summary({ index, moveSection }: { index: number; moveSection: MoveSection; }) {

    const [data, setData] = useCVData();

    function handleSummaryUpdate(e: React.ChangeEvent<HTMLTextAreaElement>) {
        setData(prev => ({ ...prev, summary: e.target.value }));
    }

    function toggleSection() {
        setData(prev => {
            const newSections = prev.sections;
            newSections[index].hidden = !newSections[index].hidden;

            return {
                ...prev,
                sections: newSections
            };
        });
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
                <UpButton onClick={() => moveSection(index, 'up')} />
                <DownButton onClick={() => moveSection(index, 'down')} />
                {
                    data.sections[index].hidden
                        ? <HideButton onClick={toggleSection} />
                        : <ShowButton onClick={toggleSection} />
                }
            </div>
        </div>
    );
}
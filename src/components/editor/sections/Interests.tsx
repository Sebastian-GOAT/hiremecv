import { type MoveSection } from '@/types/movesection';

import { Input } from '@/components/ui/input';
import useCVData from '@/hooks/useCVData';

import UpButton from '../buttons/UpButton';
import DownButton from '../buttons/DownButton';
import HideButton from '../buttons/HideButton';
import ShowButton from '../buttons/ShowButton';
import AddButton from '../buttons/AddButton';
import DeleteButton from '../buttons/DeleteButton';

import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';

export default function Interests({ index, moveSection }: { index: number; moveSection: MoveSection; }) {

    const [data, setData] = useCVData();

    function addInterest() {
        setData(prev => ({
            ...prev,
            interests: [...prev.interests, '']
        }));
    }

    function deleteInterest() {
        setData(prev => ({
            ...prev,
            interests: prev.interests.filter((_, i) => i !== prev.interests.length - 1)
        }));
    }

    function handleInterestChange(e: React.ChangeEvent<HTMLInputElement>, i: number) {
        const { value } = e.target;
        setData(prev => ({
            ...prev,
            interests: prev.interests.map((interest, index) => index === i
                ? value
                : interest
            )
        }));
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
            <AccordionItem value='interests' className='flex-1'>
                <AccordionTrigger className='cursor-pointer'>Interests</AccordionTrigger>
                <AccordionContent>
                    <ul>
                        {
                            data.interests.map((interest, i) => (
                                <li key={i}>
                                    <div className='flex flex-col gap-2'>
                                        <Input
                                            type='text'
                                            placeholder='Interest'
                                            value={interest}
                                            onChange={e => handleInterestChange(e, i)}
                                        />

                                        <Separator className='mb-2' />
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                    <div className='ml-2 mt-4 flex gap-1'>
                        <AddButton setter={addInterest} />
                        <DeleteButton setter={deleteInterest} />
                    </div>
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
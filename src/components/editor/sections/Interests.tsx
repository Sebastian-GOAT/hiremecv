import { Input } from '@/components/ui/input';
import useCVData from '@/hooks/useCVData';

import UpButton from '../UpButton';
import DownButton from '../buttons/DownButton';
import HideButton from '../buttons/HideButton';
import AddButton from '../buttons/AddButton';
import DeleteButton from '../buttons/DeleteButton';

import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from '@/components/ui/accordion';
import { Separator } from '@/components/ui/separator';

export default function Interests() {

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
                <UpButton  disabled={false} />
                <DownButton disabled={false} />
                <HideButton />
            </div>
        </div>
    );
}
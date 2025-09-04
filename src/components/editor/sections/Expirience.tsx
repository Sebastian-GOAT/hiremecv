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
import DatePicker from '../DatePicker';

export default function Expirience({ index, moveSection }: { index: number; moveSection: MoveSection; }) {

    const [data, setData] = useCVData();

    function addExpirience() {
        setData(prev => ({
            ...prev,
            expirience: [
                ...prev.expirience,
                {
                    title: '',
                    role: '',
                    startDate: new Date()
                }
            ]
        }));
    }

    function deleteExpirience() {
        setData(prev => ({
            ...prev,
            expirience: prev.expirience.filter((_, i) => i !== prev.expirience.length - 1)
        }));
    }

    function handleJobChange(e: React.ChangeEvent<HTMLInputElement>, i: number) {
        const { name, value } = e.target;
        setData(prev => ({
            ...prev,
            expirience: prev.expirience.map((job, index) => index === i
                ? { ...job, [name]: value }
                : job
            )
        }));
    }

    function handleDateChange(date: Date | undefined, i: number, field: 'startDate' | 'endDate') {
        if (!date) return;
        setData(prev => ({
            ...prev,
            expirience: prev.expirience.map((job, index) => index === i
                ? { ...job, [field]: date }
                : job
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
            <AccordionItem value='expirience' className='flex-1'>
                <AccordionTrigger className='cursor-pointer'>Expirience</AccordionTrigger>
                <AccordionContent>
                    <ul>
                        {
                            data.expirience.map((job, i) => (
                                <li key={i}>
                                    <div className='flex flex-col gap-2'>
                                        <Input
                                            type='text'
                                            name='title'
                                            placeholder='Company'
                                            value={job.title}
                                            onChange={e => handleJobChange(e, i)}
                                        />
                                        <Input
                                            type='text'
                                            name='role'
                                            placeholder='Position'
                                            value={job.role}
                                            onChange={e => handleJobChange(e, i)}
                                        />
                                        <DatePicker
                                            title='Start date'
                                            date={job.startDate}
                                            setDate={(date: Date | undefined) => handleDateChange(date, i, 'startDate')}
                                        />
                                        <DatePicker
                                            title='End date'
                                            date={job.endDate}
                                            setDate={(date: Date | undefined) => handleDateChange(date, i, 'endDate')}
                                        />

                                        <Separator className='mb-2' />
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                    <div className='ml-2 mt-4 flex gap-1'>
                        <AddButton setter={addExpirience} />
                        <DeleteButton setter={deleteExpirience} />
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
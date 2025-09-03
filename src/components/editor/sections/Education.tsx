import useCVData from '@/hooks/useCVData';

import UpButton from '../UpButton';
import DownButton from '../buttons/DownButton';
import HideButton from '../buttons/HideButton';
import AddButton from './AddButton';
import DeleteButton from '../buttons/DeleteButton';

import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import { Separator } from '@/components/ui/separator';
import DatePicker from '../DatePicker';

export default function Education() {

    const [data, setData] = useCVData();

    function addEducation() {
        setData(prev => ({
            ...prev,
            education: [
                ...prev.education,
                {
                    title: '',
                    degree: '',
                    major: '',
                    startDate: new Date(),
                    endDate: new Date()
                }
            ]
        }));
    }

    function deleteEducation() {
        setData(prev => ({
            ...prev,
            education: prev.education.filter((_, i) => i !== prev.education.length - 1)
        }));
    }

    function handleSchoolChange(e: React.ChangeEvent<HTMLInputElement>, i: number) {
        const { name, value } = e.target;
        setData(prev => ({
            ...prev,
            education: prev.education.map((school, index) => index === i
                ? { ...school, [name]: value }
                : school
            )
        }));
    }

    function handleDateChange(date: Date | undefined, i: number, field: 'startDate' | 'endDate') {
        if (!date) return;
        setData(prev => ({
            ...prev,
            education: prev.education.map((school, index) => index === i
                ? { ...school, [field]: date }
                : school
            )
        }));
    }

    return (
        <div className='flex items-center gap-4'>
            <AccordionItem value='education' className='flex-1'>
                <AccordionTrigger className='cursor-pointer'>Education</AccordionTrigger>
                <AccordionContent>
                    <ul>
                        {
                            data.education.map((school, i) => (
                                <li key={i}>
                                    <div className='flex flex-col gap-2'>
                                        <Input
                                            type='text'
                                            name='title'
                                            placeholder='School'
                                            value={school.title}
                                            onChange={e => handleSchoolChange(e, i)}
                                        />
                                        <Input
                                            type='text'
                                            name='major'
                                            placeholder='Major'
                                            value={school.major}
                                            onChange={e => handleSchoolChange(e, i)}
                                        />
                                        <Input
                                            type='text'
                                            name='degree'
                                            placeholder='Degree'
                                            value={school.degree}
                                            onChange={e => handleSchoolChange(e, i)}
                                        />
                                        <DatePicker
                                            title='Start date'
                                            date={school.startDate}
                                            setDate={(date: Date | undefined) => handleDateChange(date, i, 'startDate')}
                                        />
                                        <DatePicker
                                            title='End date'
                                            date={school.endDate}
                                            setDate={(date: Date | undefined) => handleDateChange(date, i, 'endDate')}
                                        />

                                        <Separator className='mb-2' />
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                    <div className='ml-2 mt-4 flex gap-1'>
                        <AddButton setter={addEducation} />
                        <DeleteButton setter={deleteEducation} />
                    </div>
                </AccordionContent>
            </AccordionItem>
            <div className='flex gap-1'>
                <UpButton disabled={true} />
                <DownButton disabled={false} />
                <HideButton />
            </div>
        </div>
    );
}
import { type MoveSection } from '@/types/movesection';

import { Input } from '@/components/ui/input';
import useCVData from '@/hooks/useCVData';

import UpButton from '../buttons/UpButton';
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
import DatePicker from '../DatePicker';

export default function Projects({ index, moveSection }: { index: number; moveSection: MoveSection; }) {

    const [data, setData] = useCVData();

    function addProject() {
        setData(prev => ({
            ...prev,
            projects: [
                ...prev.projects,
                {
                    title: '',
                    description: '',
                    startDate: new Date()
                }
            ]
        }));
    }

    function deleteProject() {
        setData(prev => ({
            ...prev,
            projects: prev.projects.filter((_, i) => i !== prev.projects.length - 1)
        }));
    }

    function handleProjectChange(e: React.ChangeEvent<HTMLInputElement>, i: number) {
        const { name, value } = e.target;
        setData(prev => ({
            ...prev,
            projects: prev.projects.map((project, index) => index === i
                ? { ...project, [name]: value }
                : project
            )
        }));
    }

    function handleDateChange(date: Date | undefined, i: number, field: 'startDate' | 'endDate') {
        if (!date) return;
        setData(prev => ({
            ...prev,
            projects: prev.projects.map((project, index) => index === i
                ? { ...project, [field]: date }
                : project
            )
        }));
    }

    return (
        <div className='flex items-center gap-4'>
            <AccordionItem value='projects' className='flex-1'>
                <AccordionTrigger className='cursor-pointer'>Projects</AccordionTrigger>
                <AccordionContent>
                    <ul>
                        {
                            data.projects.map((project, i) => (
                                <li key={i}>
                                    <div className='flex flex-col gap-2'>
                                        <Input
                                            type='text'
                                            name='title'
                                            placeholder='Project'
                                            value={project.title}
                                            onChange={e => handleProjectChange(e, i)}
                                        />
                                        <Input
                                            type='text'
                                            name='description'
                                            placeholder='Description'
                                            value={project.description}
                                            onChange={e => handleProjectChange(e, i)}
                                        />
                                        <DatePicker
                                            title='Start date'
                                            date={project.startDate}
                                            setDate={(date: Date | undefined) => handleDateChange(date, i, 'startDate')}
                                        />
                                        <DatePicker
                                            title='End date'
                                            date={project.endDate}
                                            setDate={(date: Date | undefined) => handleDateChange(date, i, 'endDate')}
                                        />

                                        <Separator className='mb-2' />
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                    <div className='ml-2 mt-4 flex gap-1'>
                        <AddButton setter={addProject} />
                        <DeleteButton setter={deleteProject} />
                    </div>
                </AccordionContent>
            </AccordionItem>
            <div className='flex gap-1'>
                <UpButton onClick={() => moveSection(index, 'up')} />
                <DownButton onClick={() => moveSection(index, 'down')} />
                <HideButton />
            </div>
        </div>
    );
}
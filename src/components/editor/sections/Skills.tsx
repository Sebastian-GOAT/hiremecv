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

export default function Skills({ index, moveSection }: { index: number; moveSection: MoveSection; }) {

    const [data, setData] = useCVData();

    function addSkill() {
        setData(prev => ({
            ...prev,
            skills: [
                ...prev.skills,
                {
                    title: '',
                    level: ''
                }
            ]
        }));
    }

    function deleteSkill() {
        setData(prev => ({
            ...prev,
            skills: prev.skills.filter((_, i) => i !== prev.skills.length - 1)
        }));
    }

    function handleSkillChange(e: React.ChangeEvent<HTMLInputElement>, i: number) {
        const { name, value } = e.target;
        setData(prev => ({
            ...prev,
            skills: prev.skills.map((skill, index) => index === i
                ? { ...skill, [name]: value }
                : skill
            )
        }));
    }

    return (
        <div className='flex items-center gap-4'>
            <AccordionItem value='skills' className='flex-1'>
                <AccordionTrigger className='cursor-pointer'>Skills</AccordionTrigger>
                <AccordionContent>
                    <ul>
                        {
                            data.skills.map((skill, i) => (
                                <li key={i}>
                                    <div className='flex flex-col gap-2'>
                                        <Input
                                            type='text'
                                            name='title'
                                            placeholder='Skill'
                                            value={skill.title}
                                            onChange={e => handleSkillChange(e, i)}
                                        />
                                        <Input
                                            type='text'
                                            name='level'
                                            placeholder='Level'
                                            value={skill.level}
                                            onChange={e => handleSkillChange(e, i)}
                                        />

                                        <Separator className='mb-2' />
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                    <div className='ml-2 mt-4 flex gap-1'>
                        <AddButton setter={addSkill} />
                        <DeleteButton setter={deleteSkill} />
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
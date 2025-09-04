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

export default function Languages({ index, moveSection }: { index: number; moveSection: MoveSection; }) {

    const [data, setData] = useCVData();

    function addLanguage() {
        setData(prev => ({
            ...prev,
            languages: [
                ...prev.languages,
                {
                    title: '',
                    level: 'A1'
                }
            ]
        }));
    }

    function deleteLanguage() {
        setData(prev => ({
            ...prev,
            languages: prev.languages.filter((_, i) => i !== prev.languages.length - 1)
        }));
    }

    function handleLanguageChange(e: React.ChangeEvent<HTMLInputElement>, i: number) {
        const { name, value } = e.target;
        setData(prev => ({
            ...prev,
            languages: prev.languages.map((language, index) => index === i
                ? { ...language, [name]: value }
                : language
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
            <AccordionItem value='languages' className='flex-1'>
                <AccordionTrigger className='cursor-pointer'>Languages</AccordionTrigger>
                <AccordionContent>
                    <ul>
                        {
                            data.languages.map((language, i) => (
                                <li key={i}>
                                    <div className='flex flex-col gap-2'>
                                        <Input
                                            type='text'
                                            name='title'
                                            placeholder='Language'
                                            value={language.title}
                                            onChange={e => handleLanguageChange(e, i)}
                                        />
                                        <Input
                                            type='text'
                                            name='level'
                                            placeholder='Level'
                                            value={language.level}
                                            onChange={e => handleLanguageChange(e, i)}
                                        />

                                        <Separator className='mb-2' />
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                    <div className='ml-2 mt-4 flex gap-1'>
                        <AddButton setter={addLanguage} />
                        <DeleteButton setter={deleteLanguage} />
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
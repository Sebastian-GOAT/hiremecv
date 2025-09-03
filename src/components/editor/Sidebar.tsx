import { useState, type JSX } from 'react';

import { type MoveSection } from '@/types/movesection';

import DownloadButton from './buttons/DownloadButton';
import ResetButton from './buttons/ResetButton';

import Contact from './sections/Contact';
import Education from './sections/Education';
import Expirience from './sections/Expirience';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Languages from './sections/Languages';
import Interests from './sections/Interests';
import Summary from './sections/Summary';

import { Accordion } from '@/components/ui/accordion';

type Section = {
    id: string;
    Component: ({ index, moveSection }: { index: number; moveSection: MoveSection; }) => JSX.Element;
};

export default function EditorSidebar() {

    const [sections, setSections] = useState<Section[]>([
        { id: 'education', Component: Education },
        { id: 'experience', Component: Expirience },
        { id: 'skills', Component: Skills },
        { id: 'projects', Component: Projects },
        { id: 'languages', Component: Languages },
        { id: 'interests', Component: Interests },
        { id: 'summary', Component: Summary }
    ]);

    function moveSection(index: number, direction: 'up' | 'down'): void {
        setSections(prev => {
            const newSections = [...prev];
            const targetIndex = direction === 'up' ? index - 1 : index + 1;

            // když jsme na začátku nebo konci, nic nedělej
            if (targetIndex < 0 || targetIndex >= newSections.length) return prev;

            // swap
            [newSections[index], newSections[targetIndex]] = [
                newSections[targetIndex],
                newSections[index]
            ];

            return newSections;
        });
    }

    return (
        <aside className='px-8 w-full md:w-[350px] lg:w-[500px] h-fit overflow-y-auto md:h-full bg-[var(--sidebar)]'>
            <div className='py-4 flex justify-end gap-2'>
                <DownloadButton />
                <ResetButton />
            </div>
            <Accordion type='multiple'>

                <Contact />
                {
                    sections.map((section, i) => <section.Component key={i} index={i} moveSection={moveSection} />)
                }

            </Accordion>
        </aside>
    );
}
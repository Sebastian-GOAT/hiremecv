import { type JSX } from 'react';

import DownloadButton from './buttons/DownloadButton';
import ResetButton from './buttons/ResetButton';

import Contact from './sections/Contact';
import Education from './sections/Education';
import Expirience from './sections/Expirience';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Interests from './sections/Interests';
import Summary from './sections/Summary';

import { Accordion } from '@/components/ui/accordion';

export default function EditorSidebar() {

    const sections: (({ index }: { index: number }) => JSX.Element)[] = [];

    return (
        <aside className='px-8 w-full md:w-[350px] lg:w-[500px] h-fit overflow-y-auto md:h-full bg-[var(--sidebar)]'>
            <div className='py-4 flex justify-end gap-2'>
                <DownloadButton />
                <ResetButton />
            </div>
            <Accordion type='multiple'>

                <Contact />
                {
                    sections.map((Section, i) => <Section key={i} index={i} />)
                }
                <Education />
                <Expirience />
                <Skills />
                <Projects />
                <Interests />
                <Summary />

            </Accordion>
        </aside>
    );
}
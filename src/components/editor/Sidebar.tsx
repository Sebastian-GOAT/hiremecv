import PrintButton from './buttons/PrintButton';
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
import useCVData from '@/hooks/useCVData';

export default function EditorSidebar() {

    const sectionMap = {
        education: { component: Education, hidden: false },
        experience: { component: Expirience, hidden: false },
        skills: { component: Skills, hidden: false },
        projects: { component: Projects, hidden: false },
        languages: { component: Languages, hidden: false },
        interests: { component: Interests, hidden: false },
        summary: { component: Summary, hidden: false },
    };

    const [data, setData] = useCVData();

    function moveSection(index: number, direction: 'up' | 'down'): void {
        setData(prev => {
            const newSections = [...prev.sections];
            const targetIndex = direction === 'up' ? index - 1 : index + 1;

            // Return if we're at the start or end
            if (targetIndex < 0 || targetIndex >= newSections.length) return prev;

            // Swap
            [newSections[index], newSections[targetIndex]] = [
                newSections[targetIndex],
                newSections[index]
            ];

            return {
                ...prev,
                sections: newSections
            };
        });
    }

    return (
        <aside className='px-8 w-full md:w-[350px] lg:w-[500px] h-fit overflow-y-auto md:h-full bg-[var(--sidebar)]'>
            <div className='py-4 flex justify-end gap-2'>
                <PrintButton />
                <ResetButton />
            </div>
            <Accordion type='multiple'>

                <Contact />
                {
                    data.sections.map((section, i) => {
                        const SectionComponent = sectionMap[section.section as keyof typeof sectionMap].component;

                        return (
                            <SectionComponent
                                key={i}
                                index={i}
                                moveSection={moveSection}
                            />
                        );
                    })
                }
            </Accordion>
        </aside>
    );
}
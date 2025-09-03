import { type JSX } from 'react';

import UpButton from './UpButton';
import DownButton from './DownButton';
import HideButton from './HideButton';
import DownloadButton from './DownloadButton';
import ResetButton from './ResetButton';

import Contact from './sections/Contact';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from '@/components/ui/accordion';

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

                <div className='flex items-center gap-4'>
                    <AccordionItem value='education' className='flex-1'>
                        <AccordionTrigger className='cursor-pointer'>Education</AccordionTrigger>
                        <AccordionContent>

                        </AccordionContent>
                    </AccordionItem>
                    <div className='flex gap-1'>
                        <UpButton disabled={true} />
                        <DownButton disabled={false} />
                        <HideButton />
                    </div>
                </div>

                <div className='flex items-center gap-4'>
                    <AccordionItem value='expirience' className='flex-1'>
                        <AccordionTrigger className='cursor-pointer'>Expirience</AccordionTrigger>
                        <AccordionContent>

                        </AccordionContent>
                    </AccordionItem>
                    <div className='flex gap-1'>
                        <UpButton  disabled={false} />
                        <DownButton disabled={false} />
                        <HideButton />
                    </div>
                </div>

                <div className='flex items-center gap-4'>
                    <AccordionItem value='skills' className='flex-1'>
                        <AccordionTrigger className='cursor-pointer'>Skills</AccordionTrigger>
                        <AccordionContent>

                        </AccordionContent>
                    </AccordionItem>
                    <div className='flex gap-1'>
                        <UpButton  disabled={false} />
                        <DownButton disabled={false} />
                        <HideButton />
                    </div>
                </div>

                <div className='flex items-center gap-4'>
                    <AccordionItem value='projects' className='flex-1'>
                        <AccordionTrigger className='cursor-pointer'>Projects</AccordionTrigger>
                        <AccordionContent>

                        </AccordionContent>
                    </AccordionItem>
                    <div className='flex gap-1'>
                        <UpButton  disabled={false} />
                        <DownButton disabled={false} />
                        <HideButton />
                    </div>
                </div>

                <div className='flex items-center gap-4'>
                    <AccordionItem value='languages' className='flex-1'>
                        <AccordionTrigger className='cursor-pointer'>Languages</AccordionTrigger>
                        <AccordionContent>

                        </AccordionContent>
                    </AccordionItem>
                    <div className='flex gap-1'>
                        <UpButton  disabled={false} />
                        <DownButton disabled={false} />
                        <HideButton />
                    </div>
                </div>

                <div className='flex items-center gap-4'>
                    <AccordionItem value='interests' className='flex-1'>
                        <AccordionTrigger className='cursor-pointer'>Interests</AccordionTrigger>
                        <AccordionContent>

                        </AccordionContent>
                    </AccordionItem>
                    <div className='flex gap-1'>
                        <UpButton  disabled={false} />
                        <DownButton disabled={false} />
                        <HideButton />
                    </div>
                </div>

                <div className='flex items-center gap-4'>
                    <AccordionItem value='summary' className='flex-1'>
                        <AccordionTrigger className='cursor-pointer'>Summary</AccordionTrigger>
                        <AccordionContent>

                        </AccordionContent>
                    </AccordionItem>
                    <div className='flex gap-1'>
                        <UpButton  disabled={false} />
                        <DownButton disabled={true} />
                        <HideButton />
                    </div>
                </div>

            </Accordion>
        </aside>
    );
}
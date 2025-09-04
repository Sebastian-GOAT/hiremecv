import { useMetaData } from '@/hooks/useMetaData';

import Nav from '@/components/nav/Nav';
import TemplateCard from '@/components/templates/Card';
import templates from '@/lib/templates';

import AnimateScroll from '@/components/AnimateScroll';

export default function Templates() {

    useMetaData({
        title: 'Templates | CV Pro',
        description: 'Browse and choose from a variety of professional CV templates. Customize each template to match your style and career needs.'
    });

    return (
        <>
            <Nav />
            <main>
                <div className='px-16 py-8 flex flex-col gap-2 text-center'>
                    <AnimateScroll>
                        <h1 className='text-3xl font-medium'>
                            Choose a template
                        </h1>
                    </AnimateScroll>
                    <AnimateScroll delayMs={100}>
                        <h2 className='opacity-70 text-lg'>
                            Browse good looking and proffesional resume templates
                        </h2>
                    </AnimateScroll>
                </div>
                <div>
                    <ul className='p-8 grid grid-cols-[repeat(auto-fit,_250px)] place-items-center justify-center'>
                        {
                            templates.map((template, i) => (
                                <AnimateScroll
                                    key={i}
                                    delayMs={200 + i * 100}
                                >
                                    <TemplateCard template={template} />
                                </AnimateScroll>
                            ))
                        }
                    </ul>
                </div>
            </main>
        </>
    );
}
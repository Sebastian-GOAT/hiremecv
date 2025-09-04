import useCVData from '@/hooks/useCVData';
import { Link } from 'lucide-react';

import Education from './sections/Education';
import Expirience from './sections/Expirience';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Languages from './sections/Languages';
import Interests from './sections/Interests';
import Summary from './sections/Summary';

export default function Professional() {

    const [data] = useCVData();

    const sectionMap = {
        'education': Education,
        'experience': Expirience,
        'skills': Skills,
        'projects': Projects,
        'languages': Languages,
        'interests': Interests,
        'summary': Summary
    };
    
    return (
        <>
            {/* Top section (name, contact, ...) */}
            <section className='p-8 flex'>
                {/* Name, role */}
                <div className='w-1/2'>
                    <h1 className='font-semibold text-4xl'>
                        {data.fullname}
                    </h1>
                    <h2 className='text-lg'>
                        {data.position}
                    </h2>
                </div>
                {/* Contact, links */}
                <div className='w-1/2 flex justify-end'>
                    <ul>
                        {
                            data.contact.map((contactInfo, i) => (
                                <li key={i} className='flex items-center gap-2'>
                                    <Link size={20} />
                                    <a
                                        href={contactInfo.link}
                                        target='_blank'
                                        className='break-all'
                                    >
                                        {contactInfo.title}
                                    </a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </section>

            {
                data.sections.map((section, i) => {
                    if (section.hidden) return null;
                    const SectionComponent = sectionMap[section.section as keyof typeof sectionMap];

                    return <SectionComponent key={i} data={data} />;
                })
            }
        </>
    );
}
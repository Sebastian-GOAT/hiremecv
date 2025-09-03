import { type CVData } from '@/types/cvdata';
import {
    Brain,
    Briefcase,
    FolderOpen,
    GraduationCap,
    IdCard,
    Languages,
    Link,
    Volleyball
} from 'lucide-react';

export default function Professional({ data }: { data: CVData }) {

    function formatDate(date: string | undefined): string {
        if (!date) return 'Present';

        const parsedDate = new Date(date);
        return `${parsedDate.getDate()}.${parsedDate.getMonth()}.${parsedDate.getFullYear()}`;
    }
    
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

            {/* Education */}
            <section className='px-8'>
                <h3 className='flex items-center gap-2 font-semibold'>
                    <GraduationCap size={18} />
                    Education
                </h3>
                <div className='mt-2 border-t-1 border-t-black'>
                    <ul>
                        {
                            data.education.map((school, i) => (
                                <li key={i}>
                                    <div className='py-2 flex justify-between'>
                                        <div className='text-[0.8rem] flex flex-col gap-1'>
                                            <b>{school.title}</b>
                                            {school.degree}, {school.major}
                                        </div>
                                        <div className='flex items-center'>
                                            {formatDate(school.startDate.toString())} - {formatDate(school.endDate.toString())}
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </section>

            {/* Expirience */}
            <section className='px-8'>
                <h3 className='flex items-center gap-2 font-semibold'>
                    <Briefcase size={18} />
                    Expirience
                </h3>
                <div className='mt-2 border-t-1 border-t-black'>
                    <ul>
                        {
                            data.expirience.map((job, i) => (
                                <li key={i}>
                                    <div className='py-2 flex justify-between'>
                                        <div className='text-[0.8rem] flex flex-col gap-1'>
                                            <b>{job.title}</b>
                                            {job.role}
                                        </div>
                                        <div className='flex items-center'>
                                            {formatDate(job.startDate.toString())} - {formatDate(job.endDate?.toString())}
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </section>

            {/* Skills */}
            <section className='px-8'>
                <h3 className='flex items-center gap-2 font-semibold'>
                    <Brain size={18} />
                    Skills
                </h3>
                <div className='mt-2 border-t-1 border-t-black'>
                    <ul className='flex flex-wrap'>
                        {
                            data.skills.map((skill, i) => (
                                <li key={i} className='px-4'>
                                    <div className='py-2 text-[0.8rem]'>
                                        <b>{skill.title}</b> - {skill.level}
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </section>

            {/* Projects */}
            <section className='px-8'>
                <h3 className='flex items-center gap-2 font-semibold'>
                    <FolderOpen size={18} />
                    Projects
                </h3>
                <div className='mt-2 border-t-1 border-t-black'>
                    <ul className='flex flex-wrap'>
                        {
                            data.projects.map((project, i) => (
                                <li key={i} className='w-full'>
                                    <div className='py-2 flex'>
                                        <div className='flex flex-1 flex-col gap-2 text-[0.8rem]'>
                                            <b>{project.title}</b>
                                            <p>{project.description}</p>
                                        </div>
                                        <div className='w-56 flex justify-end'>
                                            {formatDate(project.startDate.toString())} - {formatDate(project.endDate?.toString())}
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </section>

            {/* Languages */}
            <section className='px-8'>
                <h3 className='flex items-center gap-2 font-semibold'>
                    <Languages size={18} />
                    Languages
                </h3>
                <div className='mt-2 border-t-1 border-t-black'>
                    <ul className='flex flex-wrap'>
                        {
                            data.languages.map((language, i) => (
                                <li key={i} className='px-4'>
                                    <div className='py-2 text-[0.8rem]'>
                                        <b>{language.title}</b> - {language.level}
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </section>

            {/* Interests */}
            <section className='px-8'>
                <h3 className='flex items-center gap-2 font-semibold'>
                    <Volleyball size={18} />
                    Interests
                </h3>
                <div className='mt-2 border-t-1 border-t-black'>
                    <ul className='flex flex-wrap list-disc'>
                        {
                            data.interests.map((interest, i) => (
                                <li key={i} className='px-4 w-1/3'>
                                    <div className='py-2 text-[0.8rem]'>
                                        {interest}
                                    </div>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </section>

            {/* Summary */}
            <section className='px-8'>
                <h3 className='flex items-center gap-2 font-semibold'>
                    <IdCard size={18} />
                    Summary
                </h3>
                <div className='mt-2 border-t-1 border-t-black'>
                    <p className='py-2 text-[0.8rem]'>{data.summary}</p>
                </div>
            </section>
        </>
    );
}
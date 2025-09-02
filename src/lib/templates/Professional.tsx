import { type CVData } from '@/types/cvdata';
import { Briefcase, GraduationCap, Link } from 'lucide-react';

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
        </>
    );
}
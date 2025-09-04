import { type CVData } from '@/types/cvdata';
import { GraduationCap } from 'lucide-react';

export default function Education({ data }: { data: CVData }) {

    function formatDate(date: string | undefined): string {
        if (!date) return 'Present';

        const parsedDate = new Date(date);
        return `${parsedDate.getDate()}.${parsedDate.getMonth()}.${parsedDate.getFullYear()}`;
    }

    return (
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
    );
}
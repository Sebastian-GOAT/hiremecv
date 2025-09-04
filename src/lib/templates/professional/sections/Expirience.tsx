import { type CVData } from '@/types/cvdata';
import { Briefcase } from 'lucide-react';

export default function Expirience({ data }: { data: CVData }) {

    function formatDate(date: string | undefined): string {
        if (!date) return 'Present';

        const parsedDate = new Date(date);
        return `${parsedDate.getDate()}.${parsedDate.getMonth()}.${parsedDate.getFullYear()}`;
    }

    return (
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
    );
}
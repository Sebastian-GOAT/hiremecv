import { type CVData } from '@/types/cvdata';
import { FolderOpen } from 'lucide-react';

export default function Projects({ data }: { data: CVData }) {

    function formatDate(date: string | undefined): string {
        if (!date) return 'Present';

        const parsedDate = new Date(date);
        return `${parsedDate.getDate()}.${parsedDate.getMonth()}.${parsedDate.getFullYear()}`;
    }

    return (
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
    );
}
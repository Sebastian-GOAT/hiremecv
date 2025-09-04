import { type CVData } from '@/types/cvdata';
import { Brain } from 'lucide-react';

export default function Skills({ data }: { data: CVData }) {

    return (
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
    );
}
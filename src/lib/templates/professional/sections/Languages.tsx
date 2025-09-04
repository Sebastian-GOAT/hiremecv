import { type CVData } from '@/types/cvdata';
import { Languages as LanguagesIcon } from 'lucide-react';

export default function Languages({ data }: { data: CVData }) {

    return (
        <section className='px-8'>
            <h3 className='flex items-center gap-2 font-semibold'>
                <LanguagesIcon size={18} />
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
    );
}
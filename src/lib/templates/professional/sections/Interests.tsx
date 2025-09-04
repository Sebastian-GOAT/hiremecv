import { type CVData } from '@/types/cvdata';
import { Volleyball } from 'lucide-react';

export default function Interests({ data }: { data: CVData }) {

    return (
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
    );
}
import { type CVData } from '@/types/cvdata';
import { IdCard } from 'lucide-react';

export default function Summary({ data }: { data: CVData }) {

    return (
        <section className='px-8 pb-8'>
            <h3 className='flex items-center gap-2 font-semibold'>
                <IdCard size={18} />
                Summary
            </h3>
            <div className='mt-2 border-t-1 border-t-black'>
                <p className='py-2 text-[0.8rem]'>{data.summary}</p>
            </div>
        </section>
    );
}
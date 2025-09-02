import { type CVData } from '@/types/cvdata';

export default function EditorSidebar({ setData }: { setData: React.Dispatch<React.SetStateAction<CVData>> }) {

    return (
        <aside className='w-full md:w-[350px] lg:w-[500px] h-fit overflow-y-auto md:h-full bg-[var(--sidebar)]'>

        </aside>
    );
}
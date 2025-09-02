import Nav from '@/components/nav/Nav';
import EditorSidebar from '@/components/editor/Sidebar';
import Preview from '@/components/editor/Preview';
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import templates from '@/lib/templates';
import useCVData from '@/hooks/useCVData';

export default function DynamicTemplate() {

    const { id } = useParams();
    const [data, setData] = useCVData();
    const Component = useMemo(() => templates.find(template => template.id === id)?.component, [id]);

    return (
        <>
            <Nav />
            <div className='h-[calc(100vh_-_3.5rem)] flex'>
                {
                    Component ? (
                        <>
                            <EditorSidebar setData={setData} />
                            <main className='px-8 py-16 hidden md:flex flex-1 justify-center overflow-y-auto'>
                                <Preview component={<Component data={data} />} />
                            </main>
                        </>
                    ) : (
                        <main className='flex flex-1 justify-center items-center'>
                            <h1 className='text-4xl text-center font-semibold'>
                                404 Not found
                            </h1>
                        </main>
                    )
                }
            </div>
        </>
    )
}
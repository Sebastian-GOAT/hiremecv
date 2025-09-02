import Nav from '@/components/nav/Nav';
import EditorSidebar from '@/components/editor/Sidebar';

export default function DynamicTemplate() {

    return (
        <>
            <Nav />
            <div className='h-[calc(100vh_-_3.5rem)] flex'>
                <EditorSidebar />
                
            </div>
        </>
    )
}
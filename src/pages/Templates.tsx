import Nav from '@/components/nav/Nav';
import TemplateCard from '@/components/templates/Card';
import templates from '@/lib/templates';

export default function Templates() {

    return (
        <>
            <Nav />
            <main>
                <div className='px-16 py-8 flex flex-col gap-2 text-center'>
                    <h1 className='text-3xl font-medium'>
                        Choose a template
                    </h1>
                    <h2 className='opacity-70 text-lg'>
                        Browse good looking and proffesional resume templates
                    </h2>
                </div>
                <div>
                    <ul className='p-8 grid grid-cols-[repeat(auto-fit,_250px)] place-items-center justify-center'>
                        {
                            templates.map((template, i) => (
                                <TemplateCard
                                    key={i}
                                    template={template}
                                />
                            ))
                        }
                    </ul>
                </div>
            </main>
        </>
    );
}
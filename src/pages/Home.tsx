import { useMetaData } from '@/hooks/useMetaData';

import Nav from '@/components/nav/Nav';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import AnimateScroll from '@/components/AnimateScroll';

import heroImage from '@/assets/hero.png';

export default function Home() {

    useMetaData({
        title: 'Home | CV Pro',
        description: 'Create your professional CV quickly and easily. Customize your resume, preview it live, and download it as a PDF – all in one place.'
    });

    return (
        <>
            <Nav />
            <main className='flex flex-col lg:flex-row'>

                {/* Hero */}
                <section className='p-16 lg:py-24 w-full lg:w-128 text-center lg:text-left flex flex-col items-center lg:items-start gap-4'>
                    <AnimateScroll>
                        <h1 className='text-5xl font-bold leading-14'>
                            Professional & stunning CV's
                        </h1>
                    </AnimateScroll>
                    <AnimateScroll delayMs={100}>
                        <p className='max-w-120 text-md opacity-70 leading-8'>
                            Create a standout CV with ease. Fill in your details, choose a template, and download your polished resume in seconds.
                        </p>
                    </AnimateScroll>
                    <AnimateScroll delayMs={200}>
                        <div className='mt-4 flex gap-2'>
                            <Button
                                asChild
                                variant='outline'
                            >
                                <Link to='/tutorial'>
                                    How it works
                                </Link>
                            </Button>
                            <Button
                                asChild
                                variant='default'
                            >
                                <Link to='/templates'>
                                    Browse templates
                                </Link>
                            </Button>
                        </div>
                    </AnimateScroll>
                </section>

                {/* Image */}
                <div className='p-8 flex flex-1 justify-center'>
                    <img
                        src={heroImage}
                        alt='CV Examples'
                        className='w-142'
                    />
                </div>

            </main>
        </>
    );
}
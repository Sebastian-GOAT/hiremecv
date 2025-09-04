import { useMetaData } from '@/hooks/useMetaData';

import Nav from '@/components/nav/Nav';

export default function Tutorial() {

    useMetaData({
        title: 'Tutorial | CV Pro',
        description: 'Step-by-step guide on how to use our CV maker. From adding your personal details to customizing templates and downloading your resume.'
    });

    return (
        <>
            <Nav />
        </>
    );
}
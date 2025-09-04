import { useMetaData } from '@/hooks/useMetaData';

import Nav from '@/components/nav/Nav';

export default function About() {

    useMetaData({
        title: 'About | CV Pro',
        description: 'Learn more about our CV builder, its features, and how it helps job seekers create professional resumes effortlessly.'
    });

    return (
        <>
            <Nav />
        </>
    );
}
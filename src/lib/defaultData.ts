import { type CVData } from '@/types/cvdata';

const defaultData: CVData = {
    fullname: 'Peter Gray',
    position: 'Fullstack web developer',
    contact: [
        { title: 'Instagram', link: 'https://www.instagram.com' },
        { title: 'YouTube', link: 'https://www.youtube.com' },
        { title: 'Facebook', link: 'https://www.facebook.com' },
        { title: 'LinkedIn', link: 'https://www.linkedin.com' },
        { title: 'sebastianrucabado0@gmail.com' },
        { title: '+420 601 502 252' }
    ],
    education: [
        {
            title: 'Harvard University',
            major: 'Computer science',
            degree: 'Masters',
            startDate: new Date('12-4-2022'),
            endDate: new Date('6-5-2027')
        }
    ],
    expirience: [
        {
            title: 'Google',
            role: 'Cloud engineer',
            startDate: new Date('5-1-2025')
        }
    ],
    skills: [
        { title: 'Consulting products with clients', level: 'Expert' },
        { title: 'Coding', level: 'Proficient' },
        { title: 'Microsoft Office', level: 'Beginner' },
        { title: 'Databases', level: 'Advanced' },
        { title: 'TypeScript', level: 'Master' }
    ],
    projects: [
        {
            title: 'Netflix clone',
            description: `
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Eum quo quaerat dolores sequi non excepturi omnis ex
                reprehenderit ratione.
            `,
            startDate: new Date()
        }
    ],
    languages: [
        { title: 'Czech', level: 'C2' },
        { title: 'Engish', level: 'B2' }
    ],
    interests: [
        'Coding in my free time',
        'Learning new things, even outside of programming',
        'Meeting new people'
    ],
    summary: `
        Hi, I'm Peter, a full-stack web developer.
    `
};

export default defaultData;
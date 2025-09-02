import { type CVData } from '@/types/cvdata';

const defaultData: CVData = {
    fullname: 'Sebastian Rucabado',
    languages: [
        { title: 'Czech', level: 'C2' },
        { title: 'Engish', level: 'B2' }
    ],
    skills: [
        { title: 'Coding', level: 'Proficient' }
    ]
};

export default defaultData;
import { type Template } from '@/types/template';
import Professional from './templates/professional/Professional';

const templates: Template[] = [
    {
        id: 'professional',
        title: 'Professional',
        description: 'A simple black & white CV for a professional look',
        imgSrc: '#',
        href: '/template/professional',
        component: Professional
    }
];

export default templates;
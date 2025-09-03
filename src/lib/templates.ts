import { type Template } from '@/types/template';
import Professional from './templates/professional/Professional';

const templates: Template[] = [
    {
        id: 'professional',
        title: 'Professional',
        description: 'A simple black & white CV for a professional look',
        imgSrc: 'https://picsum.photos/210/297',
        href: '/template/professional',
        component: Professional
    }
];

export default templates;
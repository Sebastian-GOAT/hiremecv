import { type Template } from '@/types/template';
import Professional from './templates/Professional';

const templates: Template[] = Array(40).fill(
    {
        id: 'professional',
        title: 'Professional',
        description: 'A simple black & white CV for a professional look',
        imgSrc: 'https://picsum.photos/210/297',
        href: '/template/professional',
        component: Professional
    }
);

export default templates;
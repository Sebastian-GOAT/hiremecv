import { type CVData } from './cvdata';
import { type ComponentType } from 'react';

export type Template = {
    id: string;
    title: string;
    description: string;
    imgSrc: string;
    href: string;
    component: ComponentType<{ data: CVData }>;
};
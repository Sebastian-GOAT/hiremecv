import { Link } from 'react-router-dom';
import { type Template } from '@/types/template';
import {
  Card,
  CardContent
} from '@/components/ui/card';

export default function TemplateCard({ template }: { template: Template }) {

    return (
        <Link to={template.href}>
            <Card className='my-2 w-56 hover:-translate-y-2 hover:shadow-[0px_11px_8px_-5px_var(--card-shadow)] cursor-pointer transition-all duration-200'>
                <CardContent>
                    <div>
                        <img
                            src={template.imgSrc}
                            alt='Template showcase'
                        />
                    </div>
                    <div className='mt-4'>
                        <h3 className='font-medium text-lg'>
                            {template.title}
                        </h3>
                        <p className='mt-2 opacity-70 leading-6'>
                            {template.description}
                        </p>
                    </div>
                </CardContent>
            </Card>
        </Link>
    );
}
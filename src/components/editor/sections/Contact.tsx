import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from '@/components/ui/accordion';
import { Input } from '@/components/ui/input';
import useCVData from '@/hooks/useCVData';

export default function Contact() {

    const [data, setData] = useCVData();

    function handleNameUpdate(e: React.ChangeEvent<HTMLInputElement>) {
        const cloned = structuredClone(data);
        cloned.fullname = e.target.value;
        setData(cloned);
    }

    function handleProfessionUpdate(e: React.ChangeEvent<HTMLInputElement>) {
        const cloned = structuredClone(data);
        cloned.position = e.target.value;
        setData(cloned);
    }

    return (
        <AccordionItem value='contact' className='flex-1'>
            <AccordionTrigger className='cursor-pointer'>Info & Contact</AccordionTrigger>
            <AccordionContent className='flex flex-col gap-4'>
                
                <Input
                    type='text'
                    placeholder='Full name'
                    value={data.fullname}
                    onChange={handleNameUpdate}
                />
                <Input
                    type='text'
                    placeholder='Profession'
                    value={data.position}
                    onChange={handleProfessionUpdate}
                />

            </AccordionContent>
        </AccordionItem>
    );
}
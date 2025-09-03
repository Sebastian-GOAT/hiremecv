import { format } from 'date-fns';
import { Calendar as CalendarIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
    Popover,
    PopoverContent,
    PopoverTrigger
} from '@/components/ui/popover';

type Props = {
    title: string;
    date: Date;
    setDate: (date: Date | undefined) => void;
};

export default function DatePicker({ title, date, setDate }: Props) {

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button
                    variant='outline'
                    data-empty={!date}
                    className='data-[empty=true]:text-muted-foreground w-[280px] justify-start text-left font-normal'
                >
                    <CalendarIcon />
                    {date ? format(date, 'PPP') : <span>{title}</span>}
                </Button>
            </PopoverTrigger>
            <PopoverContent className='w-auto p-0'>
                <Calendar mode='single' selected={date} onSelect={setDate} />
            </PopoverContent>
        </Popover>
    );
}
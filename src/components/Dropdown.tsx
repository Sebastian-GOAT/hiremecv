import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'

export default function Dropdown() {

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className='sm:hidden cursor-pointer outline-0'>
                <Menu />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>
                    <Link to='/about'>
                        About us
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link to='/tutorial'>
                        How it works
                    </Link>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <Link to='/templates'>
                        Templates
                    </Link>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
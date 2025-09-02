import { Link } from 'react-router-dom';
import { Codepen } from 'lucide-react';
import NavLink from './NavLink';
import Dropdown from './Dropdown';
import {
  NavigationMenu as NavMenu,
  NavigationMenuList as NavMenuList
} from '@/components/ui/navigation-menu';
import { Button } from '@/components/ui/button';

export default function Nav() {

    return (
        <header className='px-4 w-full h-14 flex justify-between items-center'>

            {/* Logo */}
            <Link to='/' className='flex justify-center items-center gap-2'>
                <Codepen />
                <span className='hidden md:block'>Resume builder</span>
            </Link>

            {/* Navigation */}
            <NavMenu>
                <NavMenuList className='hidden sm:flex md:gap-8'>
                    <NavLink
                        title='About us'
                        href='/about'
                    />
                    <NavLink
                        title='How it works'
                        href='/tutorial'
                    />
                    <NavLink
                        title='Templates'
                        href='/templates'
                    />
                </NavMenuList>
            </NavMenu>

            {/* Get started button */}
            <Button
                variant='default'
                className='hidden sm:block cursor-pointer'
                asChild
            >
                <Link to='/templates'>
                    Get started
                </Link>
            </Button>

            {/* Dropdown */}
            <Dropdown />
            
        </header>
    );
}
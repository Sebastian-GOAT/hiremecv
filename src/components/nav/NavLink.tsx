import { Link } from 'react-router-dom';
import {
  NavigationMenuItem as NavMenuItem,
  NavigationMenuLink as NavMenuLink
} from '@/components/ui/navigation-menu';

type Props = {
    title: string;
    href: string;
};

export default function NavLink({ title, href }: Props) {

    return (
        <NavMenuItem>
            <NavMenuLink asChild>
                <Link to={href} className='text-[0.95rem]'>
                    {title}
                </Link>
            </NavMenuLink>
        </NavMenuItem>
    );
}
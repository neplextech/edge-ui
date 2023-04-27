import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
    Heading,
    GitHubIcon,
    DiscordIcon,
    useTheme,
    Button
} from '@edge-ui/react';
import Link from 'next/link';
import { SunIcon, MoonIcon } from 'lucide-react';

export default function Navbar() {
    const { isDark, toggle } = useTheme();

    return (
        <NavigationMenu className="justify-around items-center py-5 border-b-[1.5px] shadow-sm">
            <NavigationMenuList>
                <Link href="/">
                    <Heading size="h3" className="font-bold">
                        EdgeUI
                    </Heading>
                </Link>
            </NavigationMenuList>
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link href="/documentation" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>Documentation</NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/components" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>Components</NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="/" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>Examples</NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
                <NavigationMenuItem>
                    <Link href="https://github.com/neplextech" legacyBehavior passHref>
                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>GitHub</NavigationMenuLink>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
            <NavigationMenuList className="flex flex-row gap-5">
                <Link href="https://github.com/neplextech" target="_blank">
                    <span className="sr-only">GitHub</span>
                    <GitHubIcon className="h-5 w-5 cursor-pointer" />
                </Link>
                <Link href="/">
                    <span className="sr-only">Discord</span>
                    <DiscordIcon className="h-5 w-5 cursor-pointer" />
                </Link>
                <button aria-label="Toggle Theme" onClick={toggle}>
                    {isDark ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
                </button>
            </NavigationMenuList>
        </NavigationMenu>
    );
}

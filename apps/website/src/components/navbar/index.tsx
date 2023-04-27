import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
    Heading,
    GitHubIcon,
    DiscordIcon,
    useTheme
} from '@edge-ui/react';
import Link from 'next/link';
import { SunIcon, MoonIcon } from 'lucide-react';

export default function Navbar() {
    const { isDark, toggle } = useTheme();

    return (
        <NavigationMenu className="justify-around items-center py-2 border-b">
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
                    <GitHubIcon className="h-5 w-5 cursor-pointer" />
                </Link>
                <Link href="/">
                    <DiscordIcon className="h-5 w-5 cursor-pointer" />
                </Link>
                {isDark ? (
                    <SunIcon className="h-5 w-5 cursor-pointer" onClick={toggle} />
                ) : (
                    <MoonIcon className="h-5 w-5 cursor-pointer" onClick={toggle} />
                )}
            </NavigationMenuList>
        </NavigationMenu>
    );
}

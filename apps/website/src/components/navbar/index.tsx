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
import { SunIcon, MoonIcon, Menu } from 'lucide-react';

interface Props {
    onOpen: () => void;
}
export default function Navbar({ onOpen }: Props) {
    const { isDark, toggle } = useTheme();
    return (
        <NavigationMenu className="grid grid-flow-col grid-cols-2 md:grid-cols-4 py-5 border-b-[1.5px] shadow-sm">
            <NavigationMenuList>
                <NavigationMenuItem>
                    <Link href="/">
                        <Heading size="h3" className="font-bold">
                            EdgeUI
                        </Heading>
                    </Link>
                </NavigationMenuItem>
            </NavigationMenuList>
            <div className={`hidden md:block col-span-2`}>
                <NavigationMenuList>
                    <NavigationMenuItem>
                        <Link href="/docs" legacyBehavior passHref>
                            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                Documentation
                            </NavigationMenuLink>
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
            </div>

            <div className={`hidden md:block`}>
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
            </div>

            <NavigationMenuList className="md:hidden">
                <NavigationMenuItem>
                    <Button variant="ghost" onClick={onOpen}>
                        <span className="sr-only">Open Sidebar</span>
                        <Menu />
                    </Button>
                </NavigationMenuItem>
            </NavigationMenuList>
        </NavigationMenu>
    );
}

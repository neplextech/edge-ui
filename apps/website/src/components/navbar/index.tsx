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
    Button,
    useToggle,
    cn,
    ScrollArea
} from '@edge-ui/react';
import Link from 'next/link';
import { SunIcon, MoonIcon, Menu, X } from 'lucide-react';
import { DocMenuSidebar } from '../sidebar';

const Links = [
    { label: 'Documentation', href: '/docs' },
    { label: 'Components', href: '/components' },
    { label: 'Hooks', href: '/hooks' }
];

export default function Navbar() {
    const { isDark, toggle } = useTheme();
    const { isOn, off, on } = useToggle(false);

    return (
        <>
            <NavigationMenu className="justify-between px-5 md:px-0 md:justify-center grid grid-flow-col md:grid-cols-4 py-5 border-b-[1.5px] shadow-sm w-full">
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
                        {Links.map((l, i) => (
                            <NavigationMenuItem key={i}>
                                <Link href={l.href} legacyBehavior passHref>
                                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                        {l.label}
                                    </NavigationMenuLink>
                                </Link>
                            </NavigationMenuItem>
                        ))}
                    </NavigationMenuList>
                </div>

                <div className={`hidden md:block`}>
                    <NavigationMenuList className="flex flex-row gap-5">
                        <Link href="https://github.com/neplextech" target="_blank">
                            <span className="sr-only">GitHub</span>
                            <GitHubIcon className="h-5 w-5 cursor-pointer" />
                        </Link>
                        <Link href="https://neplextech.com/discord">
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
                        <Button variant="ghost" onClick={on}>
                            <span className="sr-only">Open Sidebar</span>
                            <Menu />
                        </Button>
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
            <MobileNav onClose={off} isDark={isDark} toggleDark={toggle} isOpen={isOn} />
        </>
    );
}

interface MobileNavProps {
    onClose: () => void;
    isOpen: boolean;
    isDark: boolean;
    toggleDark: () => void;
}

function MobileNav({ isOpen, isDark, toggleDark, onClose }: MobileNavProps) {
    return (
        <aside
            id="default-sidebar"
            className={cn(
                'fixed md:hidden top-0 left-0 z-40 w-screen h-screen transition-transform ease-in-out duration-300',
                isOpen ? 'translate-x-0' : '-translate-x-full'
            )}
            aria-label="Sidebar"
            onClick={({ target, currentTarget }) => {
                if (target === currentTarget) onClose();
            }}
        >
            <div className="relative shadow-2xl border-r-2 h-full py-7 space-y-7 bg-card w-full max-w-[310px] overflow-y-auto">
                <Link href="/" className="block w-fit px-3 mx-4">
                    <Heading size="h3" className="font-bold" onClick={onClose}>
                        EdgeUI
                    </Heading>
                </Link>
                <ScrollArea className="px-7">
                    {DocMenuSidebar.map((doc, idx) => (
                        <div className="my-7" key={idx}>
                            <Heading.H4 className="mb-1.5">{doc.name}</Heading.H4>
                            {doc.links.map((link, i) => (
                                <div className="w-full" key={idx + i}>
                                    <Link
                                        href={`${doc.path}${link.href}`}
                                        className="py-2.5 block px-3 rounded-lg hover:bg-accent"
                                        onClick={onClose}
                                    >
                                        {link.name}
                                    </Link>
                                </div>
                            ))}
                        </div>
                    ))}
                </ScrollArea>
                <Button onClick={onClose} variant="ghost" className="absolute -top-1 right-5">
                    <span className="sr-only">Close Sidebar</span>
                    <X />
                </Button>
                <div className="fixed w-full px-3 text-7xl left-0 bottom-0 py-5 flex gap-7 justify-around border-t-2 shadow-2xl z-10 bg-gray-100/90 dark:bg-black/90 max-w-[310px]">
                    <Link href="https://github.com/neplextech" target="_blank">
                        <span className="sr-only">GitHub</span>
                        <GitHubIcon className="h-7 w-6 cursor-pointer" />
                    </Link>
                    <Link href="https://neplextech.com/discord">
                        <span className="sr-only">Discord</span>
                        <DiscordIcon className="h-6 w-6 cursor-pointer" />
                    </Link>
                    <button aria-label="Toggle Theme" onClick={toggleDark}>
                        {isDark ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
                    </button>
                </div>
            </div>
        </aside>
    );
}

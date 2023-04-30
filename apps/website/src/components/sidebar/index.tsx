import {
    Button,
    DiscordIcon,
    GitHubIcon,
    Heading,
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    cn,
    navigationMenuTriggerStyle,
    useTheme
} from '@edge-ui/react';
import { XCircle, SunIcon, MoonIcon } from 'lucide-react';
import Link from 'next/link';

interface Props {
    onClose: () => void;
    isOpen: boolean;
}
// transition-transform -translate-x-full sm:translate-x-0

export function Sidebar({ onClose, isOpen }: Props) {
    const { isDark, toggle } = useTheme();

    return (
        <aside
            id="default-sidebar"
            className={cn(
                'fixed md:hidden top-0 left-0 z-40 w-screen h-screen transition-transform ease-in-out duration-300',
                isOpen && 'translate-x-0',
                !isOpen && '-translate-x-full'
            )}
            aria-label="Sidebar"
            onClick={({ target, currentTarget }) => {
                if (target === currentTarget) onClose();
            }}
        >
            <div className="relative shadow-2xl border-r-2 h-full py-7 overflow-y-auto space-y-7 bg-card w-full max-w-[310px]">
                <Link href="/" className="block w-fit px-3 mx-4">
                    <Heading size="h3" className="font-bold">
                        EdgeUI
                    </Heading>
                </Link>
                <ul className="mx-4">
                    <li className="w-full">
                        <Link href="/" className="py-2.5 block px-3 rounded-lg hover:bg-accent">
                            Components
                        </Link>
                    </li>
                </ul>
                <Button onClick={onClose} variant="ghost" className="absolute -top-1 right-5">
                    <span className="sr-only">Close Sidebar</span>
                    <XCircle />
                </Button>
                <div className="w-full px-3 text-7xl absolute bottom-0 py-5 flex gap-7 justify-around border-t-2 shadow-2xl z-10 bg-gray-100/90 dark:bg-black/90">
                    <Link href="https://github.com/neplextech" target="_blank">
                        <span className="sr-only">GitHub</span>
                        <GitHubIcon className="h-7 w-6 cursor-pointer" />
                    </Link>
                    <Link href="/">
                        <span className="sr-only">Discord</span>
                        <DiscordIcon className="h-6 w-6 cursor-pointer" />
                    </Link>
                    <button aria-label="Toggle Theme" onClick={toggle}>
                        {isDark ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
                    </button>
                </div>
            </div>
        </aside>
    );
}

import { Heading } from '@edge-ui/react';
import Link from 'next/link';

export const DocMenuSidebar = [
    {
        name: 'Documentation',
        path: '/docs',
        links: [
            { name: 'Introduction', href: '/introduction' },
            { name: 'Installation', href: '/installation' }
        ]
    },
    {
        name: 'Components',
        path: '/docs/components',
        links: [
            { name: 'Accordion', href: '/accordion' },
            { name: 'Alert', href: '/alert' },
            { name: 'Alert Dialog', href: '/alert-dialog' },
            { name: 'Avatar', href: '/avatar' },
            { name: 'Badge', href: '/badge' },
            { name: 'Button', href: '/button' },
            { name: 'Calendar', href: '/calendar' },
            { name: 'Card', href: '/card' },
            { name: 'Checkbox', href: '/checkbox' },
            { name: 'Code', href: '/code' },
            { name: 'Context Menu', href: '/context-menu' },
            { name: 'Dialog', href: '/dialog' },
            { name: 'Hover Card', href: '/hover-card' },
            { name: 'Input', href: '/input' },
            { name: 'Label', href: '/label' },
            { name: 'Layout', href: '/layout' },
            { name: 'Loader', href: '/loader' },
            { name: 'Navigation', href: '/navigation' },
            { name: 'Progress', href: '/progress' },
            { name: 'Scroll Area', href: '/scroll-area' },
            { name: 'Select', href: '/select' },
            { name: 'Separator', href: '/separator' },
            { name: 'Sheet', href: '/sheet' },
            { name: 'Slider', href: '/slider' },
            { name: 'Switch', href: '/switch' },
            { name: 'Tab', href: '/tab' },
            { name: 'Textarea', href: '/textarea' },
            { name: 'Toast', href: '/toast' },
            { name: 'Tooltip', href: '/tooltip' },
            { name: 'Typography', href: '/typography' }
        ]
    },
    {
        name: 'Hooks',
        path: '/docs/hooks',
        links: [
            { name: 'useBoolean', href: '/use-boolean' },
            { name: 'useBreakpoint', href: '/use-breakpoint' },
            { name: 'useClipboard', href: '/use-clipboard' },
            { name: 'useDebounce', href: '/use-debounce' },
            { name: 'useHover', href: '/use-hover' },
            { name: 'useImageLoad', href: '/use-image-load' },
            { name: 'useIntersectionObserver', href: '/use-intersection-observer' },
            { name: 'useMediaQuery', href: '/use-media-query' },
            { name: 'useTheme', href: '/use-theme' },
            { name: 'useToast', href: '/use-toast' },
            { name: 'useToggle', href: '/use-toggle' },
            { name: 'useXEffect', href: '/use-xeffect' }
        ]
    }
];

export function Sidebar() {
    return (
        <aside className="hidden md:inline-block md:col-span-1">
            <div className="h-screen overflow-y-auto overflow-x-hidden">
                <div className="flex flex-col gap-5 mb-4">
                    {DocMenuSidebar.map((menu, idx) => {
                        return (
                            <div key={idx} className="flex flex-col gap-1">
                                <Heading.H4>{menu.name}</Heading.H4>
                                {menu.links.map((m, i) => (
                                    <Link className="hover:underline" key={i + idx} href={`${menu.path}${m.href}`}>
                                        {m.name}
                                    </Link>
                                ))}
                            </div>
                        );
                    })}
                </div>
            </div>
        </aside>
    );
}

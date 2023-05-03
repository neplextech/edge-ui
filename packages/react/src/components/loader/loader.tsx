import React from 'react';
import { cn } from '../../utility';
import { Loader2 as LuLoader, Loader as LuLoader2 } from 'lucide-react';

function Oval({ className, ...props }: React.SVGProps<SVGSVGElement>) {
    return <LuLoader {...props} className={cn('w-8 h-8 text-blue-500 animate-spin', className)} />;
}

function Oval2({ className, ...props }: React.SVGProps<SVGSVGElement>) {
    return <LuLoader2 {...props} className={cn('w-8 h-8 text-blue-500 animate-spin', className)} />;
}

function Bars({ className, ...props }: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            viewBox="0 0 135 140"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
            className={cn('w-8 h-8 fill-blue-500', className)}
        >
            <rect y="10" width="15" height="120" rx="6">
                <animate
                    attributeName="height"
                    begin="0.5s"
                    dur="1s"
                    values="120;110;100;90;80;70;60;50;40;140;120"
                    calcMode="linear"
                    repeatCount="indefinite"
                />
                <animate
                    attributeName="y"
                    begin="0.5s"
                    dur="1s"
                    values="10;15;20;25;30;35;40;45;50;0;10"
                    calcMode="linear"
                    repeatCount="indefinite"
                />
            </rect>
            <rect x="30" y="10" width="15" height="120" rx="6">
                <animate
                    attributeName="height"
                    begin="0.25s"
                    dur="1s"
                    values="120;110;100;90;80;70;60;50;40;140;120"
                    calcMode="linear"
                    repeatCount="indefinite"
                />
                <animate
                    attributeName="y"
                    begin="0.25s"
                    dur="1s"
                    values="10;15;20;25;30;35;40;45;50;0;10"
                    calcMode="linear"
                    repeatCount="indefinite"
                />
            </rect>
            <rect x="60" width="15" height="140" rx="6">
                <animate
                    attributeName="height"
                    begin="0s"
                    dur="1s"
                    values="120;110;100;90;80;70;60;50;40;140;120"
                    calcMode="linear"
                    repeatCount="indefinite"
                />
                <animate
                    attributeName="y"
                    begin="0s"
                    dur="1s"
                    values="10;15;20;25;30;35;40;45;50;0;10"
                    calcMode="linear"
                    repeatCount="indefinite"
                />
            </rect>
            <rect x="90" y="10" width="15" height="120" rx="6">
                <animate
                    attributeName="height"
                    begin="0.25s"
                    dur="1s"
                    values="120;110;100;90;80;70;60;50;40;140;120"
                    calcMode="linear"
                    repeatCount="indefinite"
                />
                <animate
                    attributeName="y"
                    begin="0.25s"
                    dur="1s"
                    values="10;15;20;25;30;35;40;45;50;0;10"
                    calcMode="linear"
                    repeatCount="indefinite"
                />
            </rect>
            <rect x="120" y="10" width="15" height="120" rx="6">
                <animate
                    attributeName="height"
                    begin="0.5s"
                    dur="1s"
                    values="120;110;100;90;80;70;60;50;40;140;120"
                    calcMode="linear"
                    repeatCount="indefinite"
                />
                <animate
                    attributeName="y"
                    begin="0.5s"
                    dur="1s"
                    values="10;15;20;25;30;35;40;45;50;0;10"
                    calcMode="linear"
                    repeatCount="indefinite"
                />
            </rect>
        </svg>
    );
}

function Bubble({ className, ...props }: React.SVGProps<SVGSVGElement>) {
    return (
        <svg
            viewBox="0 0 120 30"
            xmlns="http://www.w3.org/2000/svg"
            {...props}
            className={cn('w-8 h-8 fill-blue-500', className)}
        >
            <circle cx="15" cy="15" r="15">
                <animate
                    attributeName="r"
                    from="15"
                    to="15"
                    begin="0s"
                    dur="0.8s"
                    values="15;9;15"
                    calcMode="linear"
                    repeatCount="indefinite"
                />
                <animate
                    attributeName="fill-opacity"
                    from="1"
                    to="1"
                    begin="0s"
                    dur="0.8s"
                    values="1;.5;1"
                    calcMode="linear"
                    repeatCount="indefinite"
                />
            </circle>
            <circle cx="60" cy="15" r="9" fillOpacity="0.3">
                <animate
                    attributeName="r"
                    from="9"
                    to="9"
                    begin="0s"
                    dur="0.8s"
                    values="9;15;9"
                    calcMode="linear"
                    repeatCount="indefinite"
                />
                <animate
                    attributeName="fill-opacity"
                    from="0.5"
                    to="0.5"
                    begin="0s"
                    dur="0.8s"
                    values=".5;1;.5"
                    calcMode="linear"
                    repeatCount="indefinite"
                />
            </circle>
            <circle cx="105" cy="15" r="15">
                <animate
                    attributeName="r"
                    from="15"
                    to="15"
                    begin="0s"
                    dur="0.8s"
                    values="15;9;15"
                    calcMode="linear"
                    repeatCount="indefinite"
                />
                <animate
                    attributeName="fill-opacity"
                    from="1"
                    to="1"
                    begin="0s"
                    dur="0.8s"
                    values="1;.5;1"
                    calcMode="linear"
                    repeatCount="indefinite"
                />
            </circle>
        </svg>
    );
}

export interface LoaderProps extends React.SVGProps<SVGSVGElement> {
    variant: 'spinner' | 'bars' | 'bubble' | 'oval';
}

export function Loader({ variant = 'spinner', ...props }: LoaderProps) {
    switch (variant) {
        case 'oval':
            return <Oval {...props} />;
        case 'spinner':
            return <Oval2 {...props} />;
        case 'bubble':
            return <Bubble {...props} />;
        case 'bars':
            return <Bars {...props} />;
        default:
            throw new TypeError(`Unknown loader variant "${variant}"`);
    }
}

import { Tooltip, TooltipTrigger, TooltipContent, TooltipProvider } from '@edge-ui/react';
import { StarIcon } from 'lucide-react';
import Link from 'next/link';

export function TooltipExample() {
    return (
        <div className="border-2 my-2 p-4 rounded-md flex flex-col gap-3">
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger className="mx-auto">
                        <Link
                            href={'https://github.com/neplextech/edge-ui'}
                            className="bg-secondary rounded-full p-2 border-2 block"
                        >
                            <StarIcon />
                        </Link>
                    </TooltipTrigger>
                    <TooltipContent className="mb-1">Star us on Github</TooltipContent>
                </Tooltip>
            </TooltipProvider>
        </div>
    );
}

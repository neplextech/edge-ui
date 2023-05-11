import { Popover, PopoverContent, PopoverTrigger } from '@edge-ui/react';

export function PopoverExample() {
    return (
        <div className="border p-3 rounded-md flex justify-center items-center">
            <Popover>
                <PopoverTrigger>Open</PopoverTrigger>
                <PopoverContent>Place content for the popover here.</PopoverContent>
            </Popover>
        </div>
    );
}

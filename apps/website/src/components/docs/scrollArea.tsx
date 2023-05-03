import { ScrollArea, Separator } from '@edge-ui/react';

const tags = Array.from({ length: 70 }).map((_, i, a) => `v0.1.0-dev.${a.length - i}`);

export function ScrollAreaExample() {
    return (
        <div className="border p-3 rounded-md flex justify-center items-center">
            <ScrollArea className="h-72 w-48 rounded-md border">
                <div className="p-4">
                    <h4 className="mb-4 text-sm font-medium leading-none">Release Tags</h4>
                    {tags.map((tag, i) => (
                        <div key={i}>
                            <div className="text-sm" key={tag}>
                                {tag}
                            </div>
                            <Separator className="my-2" />
                        </div>
                    ))}
                </div>
            </ScrollArea>
        </div>
    );
}

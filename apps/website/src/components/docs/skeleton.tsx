import { Skeleton } from '@edge-ui/react';

export function SkeletonExample() {
    return (
        <div className="border p-3 rounded-md flex justify-center items-center">
            <div className="flex items-center space-x-4 border p-3 rounded-md">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                </div>
            </div>
        </div>
    );
}

import { Progress } from '@edge-ui/react';

export function ProgressExample() {
    return (
        <div className="border p-3 rounded-md flex justify-center items-center">
            <Progress value={69} className="w-[60%]" />
        </div>
    );
}

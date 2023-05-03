import { Slider } from '@edge-ui/react';

export function SliderExample() {
    return (
        <div className="border p-3 rounded-md flex justify-center items-center">
            <Slider defaultValue={[50]} max={100} step={1} className={'w-[60%]'} />
        </div>
    );
}

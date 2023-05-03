import { Loader } from '@edge-ui/react';

export function LoaderExample() {
    return (
        <div className="border p-3 rounded-md flex justify-center items-center gap-3">
            <Loader variant="oval" />
            <Loader variant="spinner" />
            <Loader variant="bubble" />
            <Loader variant="bars" />
        </div>
    );
}

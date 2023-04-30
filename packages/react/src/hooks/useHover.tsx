import { RefObject, useEffect, useState } from 'react';

export function useHover<E extends HTMLElement = HTMLElement>(ref: RefObject<E>) {
    const [value, setValue] = useState<boolean>(false);

    const onEnter = () => setValue(true);
    const onLeave = () => setValue(false);

    useEffect(() => {
        ref.current?.addEventListener('mouseenter', onEnter);
        ref.current?.addEventListener('mouseleave', onLeave);

        return () => {
            ref.current?.removeEventListener('mouseenter', onEnter);
            ref.current?.removeEventListener('mouseleave', onLeave);
        };
    }, []);

    return value;
}

import React, { useCallback, useState } from 'react';

interface ToggleAction {
    state: boolean;
    isOn: boolean;
    isOff: boolean;
    setState: React.Dispatch<React.SetStateAction<boolean>>;
    toggle: () => void;
    on: () => void;
    off: () => void;
}

export function useToggle(value = false): ToggleAction {
    const [state, setState] = useState(value);

    const toggle = useCallback(() => {
        setState((p) => !p);
    }, []);

    const on = useCallback(() => {
        setState(true);
    }, []);

    const off = useCallback(() => {
        setState(false);
    }, []);

    return {
        state,
        isOn: state === true,
        isOff: state === false,
        setState,
        toggle,
        on,
        off
    };
}

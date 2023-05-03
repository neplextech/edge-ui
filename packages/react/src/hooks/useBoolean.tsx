import React, { useCallback, useState } from 'react';

interface BooleanAction {
    state: boolean;
    setState: React.Dispatch<React.SetStateAction<boolean>>;
    toggle: () => void;
    setTrue: () => void;
    setFalse: () => void;
    isTrue: boolean;
    isFalse: boolean;
}

export function useBoolean(defaultValue = false): BooleanAction {
    const [state, setState] = useState(defaultValue);

    const toggle = useCallback(() => setState((p) => !p), []);
    const setTrue = useCallback(() => setState(true), []);
    const setFalse = useCallback(() => setState(false), []);

    return {
        state,
        setState,
        toggle,
        setTrue,
        setFalse,
        isTrue: state === true,
        isFalse: state === false
    };
}

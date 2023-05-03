import { useCallback, useState } from 'react';

export interface ImageLoadState {
    error: Error | null;
    loaded: boolean;
}

export type ImageLoadAction = ImageLoadState & {
    onLoad: () => void;
    onError: (e: Error) => void;
};

export function useImageLoad(): ImageLoadAction {
    const [state, setState] = useState<ImageLoadState>({
        loaded: false,
        error: null
    });

    const onLoad = useCallback(
        () =>
            setState({
                error: null,
                loaded: true
            }),
        []
    );
    const onError = useCallback(
        (e: Error) =>
            setState({
                error: e,
                loaded: false
            }),
        []
    );

    return {
        ...state,
        onLoad,
        onError
    };
}

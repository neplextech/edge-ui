import { useEffect, useLayoutEffect } from 'react';
import { isBrowser } from '../utility';

export const useXEffect = isBrowser() ? useLayoutEffect : useEffect;

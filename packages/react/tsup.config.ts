import { defineConfig } from 'tsup';

export default defineConfig({
    dts: true,
    clean: true,
    entry: ['./src', '!./src/*.css', '!./src/stories', '!./src/*.stories.tsx'],
    skipNodeModulesBundle: true,
    bundle: false,
    format: ['cjs'],
    keepNames: true,
    minify: false,
    outDir: 'dist',
    target: 'es6',
    silent: true,
    sourcemap: true
});

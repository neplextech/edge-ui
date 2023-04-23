import { defineConfig } from 'tsup';

export default defineConfig({
    dts: true,
    clean: true,
    entry: ['./src', '!./src/*.css'],
    skipNodeModulesBundle: true,
    bundle: false,
    format: ['cjs', 'esm'],
    keepNames: true,
    minify: false,
    outDir: 'dist',
    target: 'es6',
    silent: true
});

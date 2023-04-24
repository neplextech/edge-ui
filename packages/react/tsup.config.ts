import { defineConfig } from 'tsup';

export default defineConfig({
    dts: true,
    clean: true,
    entry: ['./src/index.ts', '!./src/*.css'],
    skipNodeModulesBundle: true,
    bundle: true,
    format: ['cjs', 'esm'],
    keepNames: true,
    minify: false,
    outDir: 'dist',
    target: 'es6',
    silent: true
});

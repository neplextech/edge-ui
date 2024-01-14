import { copyFile } from 'node:fs/promises';

const src = './src/components/styles.css';
const dest = './dist/styles.css';

await copyFile(src, dest);

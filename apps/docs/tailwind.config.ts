import { Config } from 'tailwindcss';
import twedge from '@edge-ui/react/tailwind-plugin';

const config: Config = {
    content: ['./src/**/*.{js,jsx,ts,tsx}', twedge.getContentPath()],
    plugins: [twedge()]
};

export default config;

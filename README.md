# EdgeUI

UI component library for React based on [shadcn ui](https://ui.shadcn.com).

> **Note:** This library is built for our internal use case, however feel free to use it in your project if needed.

# Installation

```bash
$ npm install @edge-ui/react
```

# Usage

EdgeUI is RSC compatible. It comes with shadcn ui components with theme and layout components as well as some hooks. You can use it however you like.

### Example

1. EdgeUI exports typescript files without compiled javascript code. Therefore, you may need to tell your bundler to transpile `@edge-ui/react` package. Here is an example with next.js:

    ```js
    /** @type {import('next').NextConfig} */
    const nextConfig = {
        transpilePackages: ['@edge-ui/react']
    };

    module.exports = nextConfig;
    ```

2. You need to register edge-ui tailwindcss plugin in your tailwind config file.

    ```ts
    // tailwind.config.ts
    import { Config } from 'tailwindcss';
    import twedge from '@edge-ui/react/tailwind-plugin';

    const config: Config = {
        content: [
            './src/**/*.{js,jsx,ts,tsx}',
            // include edge-ui components in the content path
            twedge.getContentPath()
        ],
        // register the plugin
        plugins: [twedge()]
    };

    export default config;
    ```

3. You can then start using edge-ui components in your project. The `ThemeProvider` or `PageLayout` is not required to use the components.

    ```jsx
    // app/layout.jsx
    import './globals.css';
    import { PageLayout, ThemeProvider } from '@edge-ui/react';

    export default function RootLayout(children) {
        return (
            <html lang="en" suppressHydrationWarning>
                <body>
                    <ThemeProvider
                        attribute="class"
                        defaultTheme="system"
                        enableSystem={false}
                        disableTransitionOnChange
                    >
                        <PageLayout>{children}</PageLayout>
                    </ThemeProvider>
                </body>
            </html>
        );
    }
    ```

# Website

[https://ui.neplextech.com](https://ui.neplextech.com)

# GitHub

[https://github.com/neplextech/edge-ui](https://github.com/neplextech/edge-ui)

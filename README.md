# EdgeUI

UI component library for React based on [shadcn ui](https://ui.shadcn.com).

# Installation

This library is primarily built for our internal use cases but you are free to use it in your project.

```
$ npm install -D @edge-ui/react
```

# Usage

```tsx
import { EdgeUIProvider } from '@edge-ui/react';

// root
export default function Application({ Component, pageProps }: AppProps) {
    return (
        <EdgeUIProvider>
            <Component {...pageProps} />
        </EdgeUIProvider>
    );
}

// some other component
import { Heading, Button } from '@edge-ui/react';

export function MyComponent() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <Heading>Count: {count}</Heading>
            <Button
                onClick={() => {
                    setCount((p) => p + 1);
                }}
            >
                Click Me!
            </Button>
        </div>
    );
}
```

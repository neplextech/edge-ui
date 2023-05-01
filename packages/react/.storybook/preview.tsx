import '../dist/styles.css';
import React from 'react';
import type { Preview } from '@storybook/react';
import { EdgeUIProvider } from '../src/index';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/
            }
        },
        layout: 'centered'
    },
    decorators: [
        (Story) => (
            <EdgeUIProvider theme="system">
                <Story />
            </EdgeUIProvider>
        )
    ]
};

export default preview;

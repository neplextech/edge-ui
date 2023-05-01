import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../components/button';

const meta: Meta<typeof Button> = {
    title: 'Button',
    component: Button,
    argTypes: {
        variant: {
            options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
            control: {
                type: 'radio'
            }
        },
        size: {
            options: ['default', 'sm', 'lg'],
            control: {
                type: 'radio'
            }
        },
        children: {
            defaultValue: 'Button'
        }
    }
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Example: Story = {
    args: {
        children: 'Button',
        variant: 'default',
        size: 'default'
    }
};

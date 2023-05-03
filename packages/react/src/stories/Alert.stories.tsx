import type { Meta, StoryObj } from '@storybook/react';
import { Alert, AlertDescription, AlertTitle } from '../components/alert';
import React from 'react';
import { AlertCircle } from 'lucide-react';

const meta: Meta<typeof Alert> = {
    title: 'Alert',
    component: Alert,
    argTypes: {
        variant: {
            options: ['default', 'destructive'],
            control: {
                type: 'radio'
            }
        }
    }
};

export default meta;

type Story = StoryObj<typeof Alert>;

export const Example: Story = {
    args: {
        variant: 'default'
    },
    render: ({ variant }) => {
        return (
            <Alert variant={variant}>
                <AlertCircle />
                <AlertTitle>Alert!</AlertTitle>
                <AlertDescription>Description for this alert.</AlertDescription>
            </Alert>
        );
    }
};

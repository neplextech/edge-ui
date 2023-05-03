import type { Meta, StoryObj } from '@storybook/react';
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger
} from '../components/alert';
import React from 'react';
import { Button } from '../components/button';

const meta: Meta<typeof AlertDialog> = {
    title: 'AlertDialog',
    component: AlertDialog,
    argTypes: {}
};

export default meta;

type Story = StoryObj<typeof AlertDialog>;

export const Example: Story = {
    render: () => {
        return (
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button variant="outline">Show Dialog</Button>
                </AlertDialogTrigger>
                <AlertDialogContent>
                    <AlertDialogHeader>
                        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                        <AlertDialogDescription>
                            This action cannot be undone. This will permanently delete your account and remove your data
                            from our servers.
                        </AlertDialogDescription>
                    </AlertDialogHeader>
                    <AlertDialogFooter>
                        <AlertDialogCancel>Cancel</AlertDialogCancel>
                        <AlertDialogAction>Continue</AlertDialogAction>
                    </AlertDialogFooter>
                </AlertDialogContent>
            </AlertDialog>
        );
    }
};

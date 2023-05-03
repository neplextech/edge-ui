import type { Meta, StoryObj } from '@storybook/react';
import {
    ContextMenu,
    ContextMenuCheckboxItem,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuLabel,
    ContextMenuRadioGroup,
    ContextMenuRadioItem,
    ContextMenuSeparator,
    ContextMenuShortcut,
    ContextMenuSub,
    ContextMenuSubContent,
    ContextMenuSubTrigger,
    ContextMenuTrigger
} from '../components/contextMenu';
import React from 'react';

const meta: Meta<typeof ContextMenu> = {
    title: 'ContextMenu',
    component: ContextMenu,
    argTypes: {}
};

export default meta;

type Story = StoryObj<typeof ContextMenu>;

export const Example: Story = {
    render: () => {
        return (
            <ContextMenu>
                <ContextMenuTrigger
                    style={{
                        display: 'flex',
                        height: '150px',
                        width: '300px',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: '10%',
                        border: '1px',
                        borderStyle: 'dashed',
                        fontSize: '32px'
                    }}
                >
                    Right click here
                </ContextMenuTrigger>
                <ContextMenuContent className="w-64">
                    <ContextMenuItem inset>
                        Back
                        <ContextMenuShortcut>⌘[</ContextMenuShortcut>
                    </ContextMenuItem>
                    <ContextMenuItem inset disabled>
                        Forward
                        <ContextMenuShortcut>⌘]</ContextMenuShortcut>
                    </ContextMenuItem>
                    <ContextMenuItem inset>
                        Reload
                        <ContextMenuShortcut>⌘R</ContextMenuShortcut>
                    </ContextMenuItem>
                    <ContextMenuSub>
                        <ContextMenuSubTrigger inset>More Tools</ContextMenuSubTrigger>
                        <ContextMenuSubContent className="w-48">
                            <ContextMenuItem>
                                Save Page As...
                                <ContextMenuShortcut>⇧⌘S</ContextMenuShortcut>
                            </ContextMenuItem>
                            <ContextMenuItem>Create Shortcut...</ContextMenuItem>
                            <ContextMenuItem>Name Window...</ContextMenuItem>
                            <ContextMenuSeparator />
                            <ContextMenuItem>Developer Tools</ContextMenuItem>
                        </ContextMenuSubContent>
                    </ContextMenuSub>
                    <ContextMenuSeparator />
                    <ContextMenuCheckboxItem checked>
                        Show Bookmarks Bar
                        <ContextMenuShortcut>⌘⇧B</ContextMenuShortcut>
                    </ContextMenuCheckboxItem>
                    <ContextMenuCheckboxItem>Show Full URLs</ContextMenuCheckboxItem>
                    <ContextMenuSeparator />
                    <ContextMenuRadioGroup value="pedro">
                        <ContextMenuLabel inset>People</ContextMenuLabel>
                        <ContextMenuSeparator />
                        <ContextMenuRadioItem value="pedro">Pedro Duarte</ContextMenuRadioItem>
                        <ContextMenuRadioItem value="colm">Colm Tuite</ContextMenuRadioItem>
                    </ContextMenuRadioGroup>
                </ContextMenuContent>
            </ContextMenu>
        );
    }
};

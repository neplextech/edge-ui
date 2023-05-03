import type { Meta, StoryObj } from '@storybook/react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/accordion';
import React from 'react';

const meta: Meta<typeof Accordion> = {
    title: 'Accordion',
    component: Accordion
};

export default meta;
type Story = StoryObj<typeof Accordion>;

export const Example: Story = {
    render: () => {
        return (
            <Accordion
                type="single"
                collapsible
                style={{
                    width: '20vw'
                }}
            >
                <AccordionItem value="item-1">
                    <AccordionTrigger>Test item 1</AccordionTrigger>
                    <AccordionContent>Test item 1 value here.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger>Test item 2</AccordionTrigger>
                    <AccordionContent>Test item 2 value here.</AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger>Test item 3</AccordionTrigger>
                    <AccordionContent>Test item 3 value here.</AccordionContent>
                </AccordionItem>
            </Accordion>
        );
    }
};

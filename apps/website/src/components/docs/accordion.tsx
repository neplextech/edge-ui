import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@edge-ui/react';

export function AccordionExample() {
    return (
        <div className="border p-3 rounded-md flex flex-col gap-3">
            <Accordion type="single" collapsible className="w-full">
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
        </div>
    );
}

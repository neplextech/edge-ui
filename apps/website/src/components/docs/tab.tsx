import { Tabs, TabsList, TabsTrigger, TabsContent } from '@edge-ui/react';

export function TabExample() {
    return (
        <div className="border-2 my-2 p-4 rounded-md text-center">
            <Tabs defaultValue="Tab2" className="space-y-4">
                <TabsList>
                    <TabsTrigger value={'Tab1'}>Tab 1</TabsTrigger>
                    <TabsTrigger value={'Tab2'}>Tab 2</TabsTrigger>
                    <TabsTrigger value={'Tab3'}>Tab 3</TabsTrigger>
                </TabsList>
                <TabsContent value={'Tab1'}>Content for Tab 1</TabsContent>
                <TabsContent value={'Tab2'}>Content for Tab 2</TabsContent>
                <TabsContent value={'Tab3'}>Content for Tab 3</TabsContent>
            </Tabs>
        </div>
    );
}

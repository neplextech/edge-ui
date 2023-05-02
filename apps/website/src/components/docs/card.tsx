import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@edge-ui/react';

export function CardExample() {
    return (
        <div className="border p-3 rounded-md flex justify-center align-center">
            <Card>
                <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card Description Goes Here</CardDescription>
                </CardHeader>
                <CardContent>
                    <p>Card Content Goes Here</p>
                </CardContent>
                <CardFooter>
                    <p>Card Footer Goes Here</p>
                </CardFooter>
            </Card>
        </div>
    );
}

import {
    Alert,
    AlertDescription,
    AlertTitle,
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
    Button
} from '@edge-ui/react';
import { AlertCircle } from 'lucide-react';

export function AlertExample() {
    return (
        <div className="border p-3 rounded-md flex flex-col gap-3">
            <Alert variant="default">
                <AlertCircle />
                <AlertTitle>Default Alert</AlertTitle>
                <AlertDescription>Description for this alert.</AlertDescription>
            </Alert>
            <Alert variant="destructive">
                <AlertCircle />
                <AlertTitle>Destructive Alert</AlertTitle>
                <AlertDescription>Description for this alert.</AlertDescription>
            </Alert>
        </div>
    );
}

export function AlertDialogExample() {
    return (
        <div className="border p-3 rounded-md">
            <AlertDialog>
                <AlertDialogTrigger asChild>
                    <Button variant="outline">Click To Show Alert Dialog</Button>
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
        </div>
    );
}

import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
    Button,
    Input,
    Heading
} from '@edge-ui/react';

const schema = z.object({
    username: z
        .string()
        .min(3, {
            message: 'Username must be at least 3 characters long'
        })
        .max(50, {
            message: 'Username cannot exceed 50 characters'
        }),
    email: z.string().email({
        message: 'Email is required'
    }),
    password: z.string().min(8, {
        message: 'Password must be at least 8 characters long'
    })
});

export function FormControlExample() {
    const form = useForm<z.infer<typeof schema>>({
        resolver: zodResolver(schema),
        defaultValues: {
            username: '',
            email: '',
            password: ''
        }
    });

    const onSubmit = (form: z.infer<typeof schema>) => {
        console.log(form);
        // perform login
    };

    return (
        <div className="border p-3 rounded-md lg:w-1/2">
            <Form {...form}>
                <Heading.H1 className="text-center mb-4">Sign Up</Heading.H1>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <FormField
                        control={form.control}
                        name="username"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Username</FormLabel>
                                <FormControl>
                                    <Input type="text" placeholder="John Doe" {...field} />
                                </FormControl>
                                <FormDescription>Enter your username here.</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Email</FormLabel>
                                <FormControl>
                                    <Input type="email" placeholder="name@example.com" {...field} />
                                </FormControl>
                                <FormDescription>Enter your email address.</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <FormField
                        control={form.control}
                        name="password"
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel>Password</FormLabel>
                                <FormControl>
                                    <Input type="password" placeholder="super secret password" {...field} />
                                </FormControl>
                                <FormDescription>Enter your password.</FormDescription>
                                <FormMessage />
                            </FormItem>
                        )}
                    />
                    <Button type="submit" className="w-full">
                        Sign Up
                    </Button>
                </form>
            </Form>
        </div>
    );
}
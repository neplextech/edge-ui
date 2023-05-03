import React from 'react';
import {
    Input,
    Label,
    Textarea,
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
    Switch,
    useTheme,
    Checkbox
} from '@edge-ui/react';

export function InputExample() {
    return (
        <div className="border p-3 rounded-md flex justify-center items-center">
            <div className="flex flex-col gap-2 w-[30%]">
                <Label htmlFor="username">Username</Label>
                <Input placeholder="@johndoe" type="text" id="username" />
            </div>
        </div>
    );
}

export function CheckboxExample() {
    return (
        <div className="border p-3 rounded-md flex justify-center items-center">
            <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                    htmlFor="terms"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                    I accept the terms and conditions
                </label>
            </div>
        </div>
    );
}

export function TextareaExample() {
    return (
        <div className="border p-3 rounded-md flex justify-center items-center">
            <div className="flex flex-col gap-2 w-[30%]">
                <Label htmlFor="comment">Write a comment</Label>
                <Textarea placeholder="I really enjoyed this place..." id="comment" />
            </div>
        </div>
    );
}

export function SelectExample() {
    return (
        <div className="border p-3 rounded-md flex justify-center items-center">
            <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Select a language" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Programming Languages</SelectLabel>
                        <SelectItem value="typescript">TypeScript</SelectItem>
                        <SelectItem value="elixir">Elixir</SelectItem>
                        <SelectItem value="java">Java</SelectItem>
                        <SelectItem value="ruby">Ruby</SelectItem>
                        <SelectItem value="python">Python</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </div>
    );
}

export function SwitchExample() {
    const { toggle, isDark } = useTheme();

    return (
        <div className="border p-3 rounded-md flex justify-center items-center">
            <div className="flex items-center space-x-2">
                <Switch id="toggle-theme" checked={isDark} onClick={toggle} />
                <Label htmlFor="toggle-theme">{isDark ? 'Disable' : 'Enable'} Dark Mode</Label>
            </div>
        </div>
    );
}

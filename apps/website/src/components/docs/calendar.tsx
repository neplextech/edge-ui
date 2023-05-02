import React, { useState } from 'react';
import { Calendar } from '@edge-ui/react';

export function CalendarExample() {
    const [date, setDate] = useState<Date | undefined>(new Date());

    return (
        <div className="border p-3 rounded-md flex justify-center align-center">
            <Calendar mode="single" selected={date} onSelect={setDate} className="rounded-md border" />
        </div>
    );
}

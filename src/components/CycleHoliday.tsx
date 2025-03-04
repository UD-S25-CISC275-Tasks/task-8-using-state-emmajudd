import React, { useState } from "react";
import { Button } from "react-bootstrap";

type Holiday =
    | "🎃 Halloween"
    | "🎄 Christmas"
    | "🎆 New Year"
    | "🦃 Thanksgiving"
    | "💖 Valentine's Day";


export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<Holiday>("💖 Valentine's Day");

    // Define the next holiday in alphabetical order
    const nextAlphabetical: Record<Holiday, Holiday> = {
        "🎃 Halloween": "🎄 Christmas",
        "🎄 Christmas": "🎆 New Year",
        "🎆 New Year": "🦃 Thanksgiving",
        "🦃 Thanksgiving": "💖 Valentine's Day",
        "💖 Valentine's Day": "🎃 Halloween"
    };

    // Define the next holiday by the calendar year order
    const nextByYear: Record<Holiday, Holiday> = {
        "🎆 New Year": "💖 Valentine's Day",
        "💖 Valentine's Day": "🎃 Halloween",
        "🎃 Halloween": "🦃 Thanksgiving",
        "🦃 Thanksgiving": "🎄 Christmas",
        "🎄 Christmas": "🎆 New Year"
    };

    return (
        <div>
            <p>Holiday: {holiday}</p>
            <Button onClick={() => setHoliday(nextAlphabetical[holiday])}>
                Advance by Alphabet
            </Button>
            <Button onClick={() => setHoliday(nextByYear[holiday])}>
                Advance by Year
            </Button>
        </div>
    );
}

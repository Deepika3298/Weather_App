import { useEffect, useState } from 'react'

export const useDate = () => {
    // Sets the locale for formatting the date and time to English ('en').
    const locale = 'en';
    const [todayDate, setTodayDate] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTodayDate(new Date());
        }, 60 * 1000)

        return () => {
            clearInterval(timer);
        }
    }, [])

    // formats the current day of the week as a long name (e.g., "Monday").
    const day = todayDate.toLocaleDateString(locale, { weekday: 'long' });

    // constructs a string for the full date, combining the day of the week, the numerical day of the month, and the full month name (e.g., "Monday, 23, August").
    const date = `${day}, ${todayDate.getDate()}, ${todayDate.toLocaleDateString(locale, { month: 'long' })}\n\n`;

    // formats the current time using the 12-hour clock (e.g., "3:45 PM")
    const time = todayDate.toLocaleDateString(locale, { hour: 'numeric', hour12: true, minute: 'numeric' });

    return { date, time };

}
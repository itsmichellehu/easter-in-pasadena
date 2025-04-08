import React, { useState, useEffect } from "react";
import { AddToCalendarButton } from 'add-to-calendar-button-react';

const AddSundayServiceToCalendar = () => {
    const getNextSunday = () => {
        const today = new Date();
        const nextSunday = new Date(today);
        nextSunday.setDate(today.getDate() + ((7 - today.getDay()) % 7 || 7)); // Get next Sunday
        return nextSunday.toISOString().split("T")[0]; // Format YYYY-MM-DD
    };

    const [sundayDate, setSundayDate] = useState(getNextSunday());

    useEffect(() => {
        setSundayDate(getNextSunday()); // Update on component mount
    }, []);

    return (
        <AddToCalendarButton
            name="Sunday Service at Expressions Church"
            options={["Apple", "Google"]}
            location="World Wide Web"
            startDate={sundayDate}
            endDate={sundayDate}
            startTime="10:15"
            endTime="23:30"
            timeZone="America/Los_Angeles"
            label="Add to Calendar"
        />
    );
};

export default AddSundayServiceToCalendar;

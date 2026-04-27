import React, { useEffect, useState } from 'react';

const ScheduleDisplay = () => {
    const [schedules, setSchedules] = useState([]);

    useEffect(() => {
        const fetchSchedules = async () => {
            try {
                const response = await fetch('/api/schedules');
                const data = await response.json();
                setSchedules(data);
            } catch (error) {
                console.error('Error fetching schedules:', error);
            }
        };

        fetchSchedules();
    }, []);

    return (
        <div>
            <h1>School Schedule</h1>
            <table>
                <thead>
                    <tr>
                        <th>Time</th>
                        <th>Class</th>
                        <th>Teacher</th>
                        <th>Room</th>
                    </tr>
                </thead>
                <tbody>
                    {schedules.map((schedule, index) => (
                        <tr key={index}>
                            <td>{schedule.time}</td>
                            <td>{schedule.class}</td>
                            <td>{schedule.teacher}</td>
                            <td>{schedule.room}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ScheduleDisplay;
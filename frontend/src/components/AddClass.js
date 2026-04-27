import React, { useState } from 'react';

const AddClass = () => {
    const [className, setClassName] = useState('');
    const [subject, setSubject] = useState('');
    const [teacher, setTeacher] = useState('');
    const [time, setTime] = useState('');
    const [day, setDay] = useState('');
    const [room, setRoom] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Logic to add the class to the schedule
        console.log({ className, subject, teacher, time, day, room });
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Class Name" value={className} onChange={(e) => setClassName(e.target.value)} required />
            <input type="text" placeholder="Subject" value={subject} onChange={(e) => setSubject(e.target.value)} required />
            <input type="text" placeholder="Teacher" value={teacher} onChange={(e) => setTeacher(e.target.value)} required />
            <input type="text" placeholder="Time" value={time} onChange={(e) => setTime(e.target.value)} required />
            <input type="text" placeholder="Day" value={day} onChange={(e) => setDay(e.target.value)} required />
            <input type="text" placeholder="Room" value={room} onChange={(e) => setRoom(e.target.value)} required />
            <button type="submit">Add Class</button>
        </form>
    );
};

export default AddClass;
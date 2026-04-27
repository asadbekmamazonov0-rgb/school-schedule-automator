function generateSchedule(classes) {
    const schedule = {};
    const conflicts = {};

    classes.forEach((classItem) => {
        const { name, startTime, endTime, day } = classItem;
        if (!schedule[day]) {
            schedule[day] = [];
        }

        const hasConflict = schedule[day].some((scheduledClass) => {
            return (startTime < scheduledClass.endTime && endTime > scheduledClass.startTime);
        });

        if (hasConflict) {
            if (!conflicts[day]) {
                conflicts[day] = [];
            }
            conflicts[day].push(name);
        } else {
            schedule[day].push({ name, startTime, endTime });
        }
    });

    return { schedule, conflicts };
}

// Example usage:
const classes = [
    { name: 'Math', startTime: '09:00', endTime: '10:00', day: 'Monday' },
    { name: 'Science', startTime: '10:00', endTime: '11:00', day: 'Monday' },
    { name: 'History', startTime: '09:30', endTime: '10:30', day: 'Monday' },
];

const result = generateSchedule(classes);
console.log(result); // Schedule and conflicts should be logged,

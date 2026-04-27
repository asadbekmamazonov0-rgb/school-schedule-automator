const express = require('express');
const router = express.Router();

// Sample data for teachers
let teachers = [];

// Get all teachers
router.get('/', (req, res) => {
    res.json(teachers);
});

// Get a teacher by ID
router.get('/:id', (req, res) => {
    const teacher = teachers.find(t => t.id === parseInt(req.params.id));
    if (!teacher) return res.status(404).send('Teacher not found');
    res.json(teacher);
});

// Add a new teacher
router.post('/', (req, res) => {
    const { name, subject } = req.body;
    const newTeacher = { id: teachers.length + 1, name, subject };
    teachers.push(newTeacher);
    res.status(201).json(newTeacher);
});

// Update an existing teacher
router.put('/:id', (req, res) => {
    const teacher = teachers.find(t => t.id === parseInt(req.params.id));
    if (!teacher) return res.status(404).send('Teacher not found');
    const { name, subject } = req.body;
    teacher.name = name;
    teacher.subject = subject;
    res.json(teacher);
});

// Delete a teacher
router.delete('/:id', (req, res) => {
    const teacherIndex = teachers.findIndex(t => t.id === parseInt(req.params.id));
    if (teacherIndex === -1) return res.status(404).send('Teacher not found');
    teachers.splice(teacherIndex, 1);
    res.status(204).send();
});

module.exports = router;
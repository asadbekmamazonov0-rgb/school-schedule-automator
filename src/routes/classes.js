const express = require('express');
const router = express.Router();

// Mock class data
let classes = [];

// GET all classes
router.get('/', (req, res) => {
    res.status(200).json(classes);
});

// GET a class by ID
router.get('/:id', (req, res) => {
    const classId = parseInt(req.params.id);
    const classItem = classes.find(c => c.id === classId);
    if (classItem) {
        res.status(200).json(classItem);
    } else {
        res.status(404).send('Class not found');
    }
});

// POST a new class
router.post('/', (req, res) => {
    const newClass = {
        id: classes.length + 1,
        name: req.body.name,
        subject: req.body.subject,
        teacher: req.body.teacher,
    };
    classes.push(newClass);
    res.status(201).json(newClass);
});

// PUT to update an existing class
router.put('/:id', (req, res) => {
    const classId = parseInt(req.params.id);
    const classIndex = classes.findIndex(c => c.id === classId);
    if (classIndex !== -1) {
        classes[classIndex] = {
            id: classId,
            name: req.body.name,
            subject: req.body.subject,
            teacher: req.body.teacher,
        };
        res.status(200).json(classes[classIndex]);
    } else {
        res.status(404).send('Class not found');
    }
});

// DELETE a class
router.delete('/:id', (req, res) => {
    const classId = parseInt(req.params.id);
    classes = classes.filter(c => c.id !== classId);
    res.status(204).send();
});

module.exports = router;
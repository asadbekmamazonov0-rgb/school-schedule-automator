// src/routes/schedule.js

const express = require('express');
const router = express.Router();

// Mock data for schedules
let schedules = [];

// Generate a new schedule
router.post('/generate', (req, res) => {
    const newSchedule = req.body;
    schedules.push(newSchedule);
    res.status(201).send(newSchedule);
});

// Get all schedules
router.get('/', (req, res) => {
    res.status(200).send(schedules);
});

// Update a schedule by ID
router.put('/:id', (req, res) => {
    const { id } = req.params;
    const updatedSchedule = req.body;
    schedules[id] = updatedSchedule;
    res.status(200).send(updatedSchedule);
});

// Delete a schedule by ID
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    schedules.splice(id, 1);
    res.status(204).send();
});

module.exports = router;
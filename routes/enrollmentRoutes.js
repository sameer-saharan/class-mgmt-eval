const express = require('express');
const { enrollStudent } = require('../controllers/enrollmentController');

const router = express.Router();

router.post('/:classId/enroll', enrollStudent);

module.exports = router;
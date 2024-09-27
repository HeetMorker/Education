const express = require('express');
const { protect, authorize } = require('../middlewares/authMiddleware');
const { assignGrade, viewGrades } = require('../controllers/gradeController');
const router = express.Router();

// Teacher: Assign grade to a student
router.post('/assign', protect, authorize('Teacher'), assignGrade);

// Student: View grades for a course
router.get('/:courseId/grades', protect, authorize('Student'), viewGrades);

module.exports = router;

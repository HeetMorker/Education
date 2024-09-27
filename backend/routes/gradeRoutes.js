const express = require('express');
const { protect, authorize } = require('../middlewares/authMiddleware');
const { assignGrade, viewGrades, submitGrade, getGradesByCourse } = require('../controllers/gradeController');
const router = express.Router();

// Teacher: Assign grade to a student
router.post('/assign', protect, authorize('Teacher'), assignGrade);
router.get('/:courseId/grades', protect, authorize('Student'), viewGrades);
router.post('/submit', protect, authorize('Teacher'), submitGrade); // Teacher can submit grades
router.get('/:courseId', protect, authorize('Teacher', 'Admin'), getGradesByCourse); // View grades for a course

module.exports = router;

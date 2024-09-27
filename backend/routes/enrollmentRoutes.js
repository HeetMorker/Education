const express = require('express');
const { protect, authorize } = require('../middlewares/authMiddleware');
const { enrollStudent, unenrollStudent, viewEnrolledCourses } = require('../controllers/enrollmentController');
const router = express.Router();

router.post('/enroll', protect, authorize('Admin'), enrollStudent);
router.post('/unenroll', protect, authorize('Admin'), unenrollStudent);
router.get('/my-courses', protect, authorize('Student'), viewEnrolledCourses);

module.exports = router;

const express = require('express');
const { protect, authorize } = require('../middlewares/authMiddleware');
const { uploadAssignment } = require('../controllers/assignmentsController');
const multer = require('multer');
const router = express.Router();

// Multer for file upload
const upload = multer({ dest: 'uploads/assignments/' });
router.post('/upload', protect, authorize('Student'), upload.single('assignment'), uploadAssignment);

module.exports = router;

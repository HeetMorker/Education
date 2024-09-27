const multer = require('multer');
const Assignment = require('../models/Assignment');

// Multer configuration for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/assignments/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// Upload assignment (Student only)
exports.uploadAssignment = async (req, res) => {
  const { description, courseId } = req.body;
  const file = req.file;

  if (!file) {
    return res.status(400).json({ message: 'No file uploaded' });
  }

  try {
    const assignment = new Assignment({
      student: req.user._id,
      course: courseId,
      file: file.filename,
      description,
    });

    await assignment.save();
    res.status(201).json({ message: 'Assignment uploaded successfully', assignment });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

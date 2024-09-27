const Course = require('../models/Course');
const User = require('../models/User');

// Teacher: Assign grade to a student
exports.assignGrade = async (req, res) => {
  const { courseId, studentId, grade } = req.body;

  try {
    const course = await Course.findById(courseId);

    // Check if the student is enrolled in the course
    if (!course.studentsEnrolled.includes(studentId)) {
      return res.status(400).json({ message: 'Student is not enrolled in this course' });
    }

    // Check if the grade is already assigned
    const existingGrade = course.grades.find(g => g.student.toString() === studentId);
    if (existingGrade) {
      existingGrade.grade = grade; // Update the existing grade
    } else {
      course.grades.push({ student: studentId, grade }); // Add a new grade
    }

    await course.save();
    
    res.status(200).json({ message: 'Grade assigned successfully', course });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Student: View grades for a course
exports.viewGrades = async (req, res) => {
  const { courseId } = req.params;

  try {
    const course = await Course.findById(courseId).populate('grades.student', 'name email');
    
    const studentGrades = course.grades.filter(g => g.student._id.toString() === req.user._id.toString());

    if (studentGrades.length === 0) {
      return res.status(404).json({ message: 'No grades found for this student' });
    }

    res.status(200).json({ grades: studentGrades });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};




exports.submitGrade = async (req, res) => {
  const { courseId, studentId, grade } = req.body;

  try {
    // Ensure that the teacher is assigned to the course
    const course = await Course.findById(courseId);
    if (!course || String(course.assignedTeacher) !== req.user.id) {
      return res.status(403).json({ message: 'Not authorized to grade this course' });
    }

    // Create or update the grade for the student
    let gradeRecord = await Grade.findOne({ course: courseId, student: studentId });
    if (!gradeRecord) {
      gradeRecord = new Grade({ course: courseId, student: studentId, grade });
    } else {
      gradeRecord.grade = grade;
    }

    await gradeRecord.save();
    res.status(200).json({ message: 'Grade submitted successfully', grade: gradeRecord });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get all grades for a specific course (Teacher/Admin)
exports.getGradesByCourse = async (req, res) => {
  const { courseId } = req.params;

  try {
    const grades = await Grade.find({ course: courseId }).populate('student', 'name email');
    res.status(200).json(grades);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};
const Course = require('../models/Course');
const User = require('../models/User');

// Admin: Enroll a student in a course
exports.enrollStudent = async (req, res) => {
  const { studentEmail, courseId } = req.body;

  try {
    // Check if the student exists
    const student = await User.findOne({ email: studentEmail, role: 'Student' });
    if (!student) {
      return res.status(404).json({ message: 'Student not found or not a student' });
    }

    // Find the course
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    // Check if the student is already enrolled
    if (course.studentsEnrolled.includes(student._id)) {
      return res.status(400).json({ message: 'Student is already enrolled in this course' });
    }

    // Enroll the student
    course.studentsEnrolled.push(student._id);
    await course.save();

    res.status(200).json({ message: 'Student enrolled successfully', course });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Admin: Remove a student from a course
exports.unenrollStudent = async (req, res) => {
  const { studentEmail, courseId } = req.body;

  try {
    // Check if the student exists
    const student = await User.findOne({ email: studentEmail, role: 'Student' });
    if (!student) {
      return res.status(404).json({ message: 'Student not found or not a student' });
    }

    // Find the course
    const course = await Course.findById(courseId);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    // Check if the student is enrolled
    if (!course.studentsEnrolled.includes(student._id)) {
      return res.status(400).json({ message: 'Student is not enrolled in this course' });
    }

    // Unenroll the student
    course.studentsEnrolled = course.studentsEnrolled.filter(id => id.toString() !== student._id.toString());
    await course.save();

    res.status(200).json({ message: 'Student unenrolled successfully', course });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Student: View enrolled courses
exports.viewEnrolledCourses = async (req, res) => {
  try {
    const courses = await Course.find({ studentsEnrolled: req.user._id }).populate('assignedTeacher', 'name email');
    res.status(200).json({ courses });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

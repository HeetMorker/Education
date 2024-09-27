// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Index from './Index';
// import AddCourse from './AddCourse';
// import ViewCourses from './ViewCourses';
// import UploadAssignment from './UploadAssignment';
// import CreateQuiz from './CreateQuiz';
// import GradeStudents from './GradeStudents';
// import ProtectedRoute from '../midleware/ProtectedRoute';
// import Unauthorized from './Unauthorized'; 
// import Layout from "./Layout"
// import Login from './Login';
// import Register from './Register';

// function App() {
//   const role = localStorage.getItem('role');

//   return (
//     <Router>
//       <Routes>
//       <Route path="/register" element={<Register />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/" element={<Layout />}>
//         <Route path="/" element={ <ProtectedRoute allowedRoles={['Admin']}><Index /></ProtectedRoute>}/>
//         <Route path="/add-courses"element={<ProtectedRoute allowedRoles={['Admin']}><AddCourse /></ProtectedRoute>}/>
//         <Route path="/edit-course/:courseId" element={<ProtectedRoute allowedRoles={['Admin', 'Teacher']}><AddCourse /></ProtectedRoute>}/>
//         <Route path="/grade-students/:courseId" element={<ProtectedRoute allowedRoles={['Teacher']}><GradeStudents /></ProtectedRoute>}/>
//         <Route path="/upload-assignment/:courseId"element={ <ProtectedRoute allowedRoles={['Student']}><UploadAssignment /></ProtectedRoute>}/>
//         <Route path="/create-quiz/:courseId" element={<ProtectedRoute allowedRoles={['Student']}><CreateQuiz /></ProtectedRoute>}/>
//         <Route path="/view-courses" element={<ProtectedRoute allowedRoles={['Admin', 'Teacher', 'Student']}><ViewCourses /></ProtectedRoute>}/>
//       </Route>
//         <Route path="/unauthorized" element={<Unauthorized />} />
//         <Route path="/" element={<Navigate to="/login" />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Index from './Index';
import AddCourse from './AddCourse';
import ViewCourses from './ViewCourses';
import UploadAssignment from './UploadAssignment';
import CreateQuiz from './CreateQuiz';
import GradeStudents from './GradeStudents';
import ProtectedRoute from '../midleware/ProtectedRoute';
import Unauthorized from './Unauthorized'; 
import Layout from "./Layout";
import Login from './Login';
import Register from './Register';
import ViewEnrolledCourses from './ViewEnrolledCourses';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public Routes */}
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />

        {/* Layout Wrapper for Protected Routes */}
        <Route path="/" element={<Layout />}>
          {/* Protected Admin Routes */}
          <Route path="/" element={ <ProtectedRoute allowedRoles={['Admin']}><Index /></ProtectedRoute>} />
          <Route path="/add-courses" element={<ProtectedRoute allowedRoles={['Admin']}><AddCourse /></ProtectedRoute>} />
          
          {/* Protected Admin and Teacher Routes */}
          <Route path="/edit-course/:courseId" element={<ProtectedRoute allowedRoles={['Admin', 'Teacher']}><AddCourse /></ProtectedRoute>} />
          <Route path="/grade-students/:courseId" element={<ProtectedRoute allowedRoles={['Teacher']}><GradeStudents /></ProtectedRoute>} />

          {/* Protected Student Routes */}
          <Route path="/my-courses" element={<ProtectedRoute allowedRoles={['Student']}><ViewEnrolledCourses   /></ProtectedRoute>} />
          <Route path="/upload-assignment/:courseId" element={<ProtectedRoute allowedRoles={['Student']}><UploadAssignment /></ProtectedRoute>} />
          <Route path="/create-quiz/:courseId" element={<ProtectedRoute allowedRoles={['Student']}><CreateQuiz /></ProtectedRoute>} />

          {/* Common Route (Accessible to Admin, Teacher, Student) */}
          <Route path="/view-courses" element={<ProtectedRoute allowedRoles={['Admin', 'Teacher', 'Student']}><ViewCourses /></ProtectedRoute>} />
        </Route>

        {/* Unauthorized route */}
        <Route path="/unauthorized" element={<Unauthorized />} />

        {/* Redirect any unknown path to login */}
        {/* <Route path="*" element={<Navigate to="/login" />} /> */}
      </Routes>
    </Router>
  );
}

export default App;

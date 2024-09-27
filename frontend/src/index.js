// import React from "react";
// import ReactDOM from "react-dom/client";
// import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
// import Layout from "./pages/Layout";
// import Login from "./pages/Login"; 
// import Register from "./pages/Register";
// import Index from "./pages/Index" ;
// import EnrollmentChart from "./components/EnrollmentChart";
// import ProtectedRoute from "./midleware/ProtectedRoute";
// import AddCourse from "./pages/AddCourse";
// import ViewCourses from "./pages/ViewCourses";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <>
//       <Route path="/register" element={<Register />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/" element={<ProtectedRoute><Layout /></ProtectedRoute>}>
//         <Route path="/" element={<Index />} />
//         <Route path="/add-courses" element={<AddCourse />} />
//         <Route path="/edit-course/:courseId" element={<AddCourse />} />
//         <Route path="/view-courses" element={<ViewCourses />} />
//       </Route>
//     </>
//   )
// );

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//       <RouterProvider router={router} />
//   </React.StrictMode>
// );


import React from "react";
import ReactDOM from "react-dom/client";

import App from "./pages/App";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
);


// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
// import Index from './pages/Index';
// import AddCourse from './pages/AddCourse';
// import ViewCourses from './pages/ViewCourses';
// import UploadAssignment from './pages/UploadAssignment';
// import CreateQuiz from './pages/CreateQuiz';
// import GradeStudents from './pages/GradeStudents';
// import ProtectedRoute from './midleware/ProtectedRoute';
// import Unauthorized from './pages/Unauthorized'; 
// import Login from './pages/Login';

// function index() {
//   const role = localStorage.getItem('role'); // Get the role from localStorage after login

//   return (
//     <Router>
//       <Routes>
//         <Route path="/login" element={<Login />} />
//         <Route  path="/"element={ <ProtectedRoute allowedRoles={['Admin']}> <Index /> </ProtectedRoute> } /> 
//         <Route path="/add-course" element={ <ProtectedRoute allowedRoles={['Admin']}> <AddCourse /></ProtectedRoute>} />
//         <Route path="/edit-course/:courseId" element={ <ProtectedRoute allowedRoles={['Admin', 'Teacher']}><AddCourse /></ProtectedRoute>} />
//         <Route path="/grade-students/:courseId" element={ <ProtectedRoute allowedRoles={['Teacher']}> <GradeStudents /></ProtectedRoute>}/>
//         <Route path="/upload-assignment/:courseId" element={ <ProtectedRoute allowedRoles={['Student']}> <UploadAssignment /> </ProtectedRoute> } />
//         <Route path="/create-quiz/:courseId" element={ <ProtectedRoute allowedRoles={['Student']}> <CreateQuiz /> </ProtectedRoute> } />
//         <Route path="/view-courses"  element={<ProtectedRoute allowedRoles={['Admin', 'Teacher', 'Student']}><ViewCourses /></ProtectedRoute> } />
//         <Route path="/unauthorized" element={<Unauthorized />} />
//         <Route path="*" element={<Navigate to="/login" />} />
//       </Routes>
//     </Router>
//   );
// }

// export default index;

import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import RecruiterPage from './js/RecruiterPage';
//import Header from './tempheader';
import Batchwise from './js/Batchwise';
import StudentPage from './js/StudentPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './js/Home';
import ContactUs from './js/contactus';
import Header from './js/components/Header';
import Login from './js/login';
import Signup from './js/signup';
import Reg from './js/AdminRegistration'
import Crawling from './js/Crawling';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Campuslife from './js/campuslife';
import CourseDescription from './js/components/CourseDescription';

// import Admin from './js/admin';
// import AddEnquiryForm from './js/components/AddEnquiryForm';
// import Placement from './js/components/Placement';
// import Batch from './js/components/Batch';
// import Course from './js/components/Course';
// //import Reg from './js/components/Reg'
// import Announcement from './js/components/Announcement';
// import Enquirytable from './js/components/Enquirytable';
// import Followup from './js/components/Followup';
// import PrivateRoute from './js/components/PrivateRoute';
// import AdminEnquiry from './js/components/AdminEnquiry';


import Admin from './js/admin';
import AddEnquiryForm from './js/components/AddEnquiryForm';
import Placement from './js/components/placement/Placement';
import Batch from './js/components/Batch';
import Course from './js/components/Course';
//import Reg from './js/components/Reg'
import Announcement from './js/components/announcement/announcement';
import Enquirytable from './js/components/Enquirytable';
import Followup from './js/components/Followup/Followup';
import PrivateRoute from './js/components/PrivateRoute';
import AdminEnquiry from './js/components/AdminEnquiry';
import Staff from './js/components/Staff/staff_master';


const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
  <Crawling/>
    <Header />
    <Routes>
      <Route path="/" element={<App />}>
      <Route path="/" element={<Home />} />
        <Route path="RecruiterPage" element={<RecruiterPage />} />
        <Route path="Batchwise" element={<Batchwise />} />
        <Route path="students/:batch" element={<StudentPage />} />
        <Route path="Home" element={<Home />} />
        <Route path="Contactus" element={<ContactUs />} />
        <Route path="courses" element={< Header/>}/>
      <Route path="/Course/:coursename" element={<CourseDescription/>} />  
       <Route path="/login" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/Batchwise/:batchName" element={<StudentPage/>} /> 
         <Route path="/campuslife" element={<Campuslife/>} />
         <Route path="/AdminRegistration" element={<Reg/>} />
         <Route path="/Crawling" element={<Crawling/>} />


      </Route>

      {/* <Route path="/admin" element={<Admin />}>
      <Route path="course" element={<Course />}/>
      <Route path="batch" element={<Batch />} />
      <Route path="placement" element={<Placement />} />
      <Route path="announcement" element={<Announcement />} />
      <Route path="reg" element={<Reg />} />
      <Route path="followup" element={<Followup />} />
      <Route path="enquirytable" element={<AdminEnquiry />} />
      <Route path="enquirytable" element={<AdminEnquiry />} />
      <Route path="addenquiry" element={<AddEnquiryForm />} /> */}

<Route path="/admin" element={<Admin />}>
      <Route path="course" element={<Course />}/>
      <Route path="batch" element={<Batch />} />
      <Route path="placement" element={<Placement />} />
      <Route path="announcement" element={<Announcement />} />
      <Route path="reg" element={<Reg />} />
      <Route path="followup" element={<Followup />} />
      <Route path="enquirytable" element={<AdminEnquiry />} />
      <Route path="enquirytable" element={<AdminEnquiry />} />
      <Route path="addenquiry" element={<AddEnquiryForm />} />
      <Route path="staff" element={<Staff />} />

      
      </Route>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();

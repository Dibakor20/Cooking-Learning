import React from 'react';
import './App.css'
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/homePage/Home';
import CourseVideo from './pages/courseVideo/CourseVideo';
import CourseDetails from './pages/courseDetails/CourseDetails';
import AddVideo from './pages/admin/addVideo/AddVideo';
import Login from './pages/Auth/Login';
import Register from './pages/Auth/Register';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/course-details/:title' element={<CourseDetails/>}/>
        <Route path="videos/:title" element={<CourseVideo />} />
        <Route path="/addVideo" element={<AddVideo />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;

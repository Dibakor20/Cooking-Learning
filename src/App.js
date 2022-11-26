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

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/course-details/:videoId' element={<CourseDetails/>}/>
        <Route path="videos/:videoId" element={<CourseVideo />} />
        <Route path="/addVideo" element={<AddVideo />} />
      </Routes>
    </>
  );
}

export default App;

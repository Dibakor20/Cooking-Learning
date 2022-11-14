import React from 'react';
import './App.css'
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from './pages/homePage/Home';
import CourseVideo from './pages/courseVideo/CourseVideo';
import CourseDetails from './pages/courseDetails/CourseDetails';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/course-details/:videoId' element={<CourseDetails/>}/>
        <Route path="videos/:videoId" element={<CourseVideo />} />
      </Routes>
    </>
  );
}

export default App;

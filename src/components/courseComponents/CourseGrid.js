import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchSingleVideo } from '../../features/singleVideo/SingleVideoSlice';
import CourseAccess from './CourseAccess';
import Tabs from './Tabs';

const CourseGrid = () => {
    const { video, isLoading, isError, error } = useSelector(
        (state) => state.singleVideo
      );
      console.log(video)
    const dispatch = useDispatch()
    const { videoId } = useParams()
    
    useEffect(() => {
        dispatch(fetchSingleVideo(videoId))
    }, [dispatch, videoId])
    
    return (
        <div className='container pt-16'>
            <div className='lg:grid lg:grid-cols-12 gap-10'>
                <div className='md:grid col-span-7'>
                    <Tabs video={video} />
                </div>
                <div className='md:grid col-span-4'>
                    <CourseAccess video={video} />
                </div>
            </div>
        </div>
    );
};

export default CourseGrid;
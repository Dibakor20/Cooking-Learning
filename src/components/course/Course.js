import React from "react";
import CourseItem from "./CourseItem";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setPageCount, setPartialVideo } from "../../features/filter/FilterSlice";
import { fetchVideos } from "../../features/videos/VideoSlice";


const Course = () => {
  const dispatch = useDispatch();
  const { videos, isLoading, isError, error } = useSelector((state) => state.video);
  const { tags, search, author, partialVideo, perPage, offset } = useSelector((state) => state.filter)

  useEffect(() => {
    dispatch(fetchVideos({ tags, search, author}))
    
    var count = Math.ceil(videos.length / perPage);
    dispatch(setPageCount(count));
    setPartialData();
  }, [dispatch, tags, search, author, perPage, videos.length,offset]);
  
  const setPartialData = () =>  {
    const partialData = videos.slice(offset, offset + perPage);
    console.log(partialData)
    dispatch(setPartialVideo(partialData));
}

  //video call
  let content;
  if (isLoading) content = <div className="col-span-12">Loading...</div>;
  if (!isLoading && isError)
  {
    window.location.reload()
   }

  if (!isError && !isLoading && videos?.length === 0) {
    content = <div className="col-span-12">No videos found! Please Reload</div>;
  }

  if (!isError && !isLoading && videos?.length > 0) {
    content = partialVideo?.map((video) => (
      <CourseItem key={video.id} video={video} />
    ));
  }
  return (
    <>
  
        <div id="Courses">
        <h3 className="text-center font-sans text-2xl  text-[#ff5421] font-bold">Popular Course</h3>
        <h3 className="text-center font-sans text-4xl py-4  text-[#031a3d] font-bold">Latest Online Courses</h3>
        </div>
      <section className="pt-6">
        <div className="grid grid-cols-12 gap-4 max-w-7xl mx-auto px-5 lg:px-0 min-h-[300px]">
          {content}
        </div>
      </section>
    </>
  );
};

export default Course;

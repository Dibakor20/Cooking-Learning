import React from 'react';
import ModuleList from './ModuleList';
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRelatedVideos } from "../../features/relatedVideo/RelatedVideoSlice";

const Module = ({ currentVideoId, tags }) => {
    const dispatch = useDispatch();
    const {relatedVideos,isLoading,isError,error} = useSelector((state)=>state.relatedVideo)

    useEffect(() => {
       dispatch(fetchRelatedVideos({tags,id:currentVideoId})) 
    }, [dispatch, tags, currentVideoId])
    
     //video call
  let content;
  if (isLoading) content = <div className="col-span-12">Loading...</div>;
  if (!isLoading && isError)
    {
    window.location.reload()
    }

  if (!isError && !isLoading && relatedVideos?.length === 0) {
    content = <div className="col-span-12">No videos found!</div>;
  }

  if (!isError && !isLoading && relatedVideos?.length > 0) {
    content = relatedVideos.map((video) => (
        <ModuleList key={video.id} video={video} />
    ));
  }
    return (
      <div className='overflow-hidden bg-white shadow sm:rounded-lg p-5 border-2'>
         <div class="col-span-full lg:col-auto max-h-[610px] overflow-y-auto">
            {content}
        </div>
       </div>
    );
};

export default Module;
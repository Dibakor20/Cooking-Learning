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
    content = <div className="col-span-12">{error}</div>;

  if (!isError && !isLoading && relatedVideos?.length === 0) {
    content = <div className="col-span-12">No videos found!</div>;
  }

  if (!isError && !isLoading && relatedVideos?.length > 0) {
    content = relatedVideos.map((video) => (
        <ModuleList key={video.id} video={video} />
    ));
  }
    return (
        <div class="col-span-full lg:col-auto max-h-[570px] overflow-y-auto">
            {content}
        </div>
    );
};

export default Module;
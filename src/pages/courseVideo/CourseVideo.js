import React from "react";
import Navbar from "../../components/common/Navbar";
import VideoDescription from "../../components/courseDetails/VideoDescription";
import VideoPlayer from "../../components/courseDetails/VideoPlayer";
import Module from "../../components/courseModule/Module";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleVideo } from "../../features/singleVideo/SingleVideoSlice";
import Header from "../../components/dashboard/Header";

const CourseVideo = () => {
  const dispatch = useDispatch();
  const { video, isLoading, isError, error } = useSelector(
    (state) => state.singleVideo
  );
  console.log(video);
  const { videoId } = useParams();

  const { id, title, link, tags } = video;

  useEffect(() => {
    dispatch(fetchSingleVideo(videoId));
  }, [dispatch, videoId]);

  let content = null;
  if (isLoading) content = <div className="col-span-12">Loading...</div>;
  if (!isLoading && isError)
    content = <div className="col-span-12">{error}</div>;

  if (!isError && !isLoading && !video?.id) {
    content = <div className="col-span-12">No videos found!</div>;
  }

  if (!isError && !isLoading && video?.id) {
    content = (
      <div class="grid md:grid-cols-3 gap-2 lg:gap-8">
        <div class="col-span-full w-full space-y-8 lg:col-span-2">
          <VideoPlayer key={id} link={link} title={title} />
                <VideoDescription key={id} video={video} />
            </div>
            <Module/>
      </div>
    );
  }
  return (
    <>
      <Header/>
      <section class="pt-6 pb-20">
        <div class="mx-auto max-w-7xl px-2 pb-20 min-h-[400px]">{content}</div>
      </section>
    </>
  );
};

export default CourseVideo;

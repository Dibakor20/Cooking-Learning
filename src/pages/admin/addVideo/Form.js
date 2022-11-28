import { useState } from "react";
import { useDispatch } from "react-redux";
import { createVideos } from "../../../features/videos/VideoSlice";

export default function Form() {
  const [newVideo, setNewVideo] = useState({
    title: "",
    description: "",
    author: "",
    link: "",
    thumbnail: "",
    date: "",
    duration: "",
    views: "",
  });
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const videoInfo = { ...newVideo };
    videoInfo[e.target.name] = e.target.value;
    setNewVideo(videoInfo);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      createVideos({
        title: newVideo.title,
        description: newVideo.description,
        author: newVideo.author,
        link: newVideo.link,
        thumbnail: newVideo.thumbnail,
        date: newVideo.date,
        duration: newVideo.duration,
        views: newVideo.views,
        id: Math.floor(Math.random() * 999),
      })
    );
    e.target.reset()
  };

  return (
    <form method="POST" onSubmit={handleSubmit}>
      <div className="shadow overflow-hidden sm:rounded-md">
        <div className="px-4 py-5 bg-white sm:p-6">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <label className="block text-sm font-medium text-gray-700">
                Title
              </label>
              <input
                className="mt-2 py-3 px-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                type="text"
                name="title"
                onChange={handleChange}
                placeholder="Title"
                required
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <label className="block text-sm font-medium text-gray-700">
                Author
              </label>
              <input
                className="mt-2 py-3 px-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                name="author"
                onChange={handleChange}
                placeholder="Author"
                required
              />
            </div>

            <div className="col-span-6">
              <label className="block text-sm font-medium text-gray-700">
                description
              </label>
              <textarea
                className="mt-2 py-3 px-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                name="description"
                onChange={handleChange}
                placeholder="Description"
                required
              />
            </div>

            <div className="col-span-6">
              <label className="block text-sm font-medium text-gray-700">
                Link
              </label>
              <input
                className="mt-2 py-3 px-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                name="link"
                onChange={handleChange}
                placeholder="YouTube Video link"
                required
              />
            </div>

            <div className="col-span-6">
              <label className="block text-sm font-medium text-gray-700">
                Thumbnail Link
              </label>
              <input
                className="mt-2 py-3 px-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                name="thumbnail"
                onChange={handleChange}
                placeholder="Thumbnail link"
                required
              />
            </div>

            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Upload Date
              </label>
              <input
                className="mt-2 py-3 px-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                name="date"
                onChange={handleChange}
                placeholder="Upload Date"
                required
              />
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Video Duration
              </label>
              <input
                className="mt-2 py-3 px-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                name="duration"
                onChange={handleChange}
                placeholder="Video Duration"
                required
              />
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <label className="block text-sm font-medium text-gray-700">
                Views
              </label>
              <input
                className="mt-2 py-3 px-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border border-gray-300 rounded-md"
                name="views"
                onChange={handleChange}
                placeholder="Video no of views"
                required
              />
            </div>
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500"
          >
            Save
          </button>
        </div>

        {/* <Success message="Video was added successfully" /> */}
      </div>
    </form>
  );
}

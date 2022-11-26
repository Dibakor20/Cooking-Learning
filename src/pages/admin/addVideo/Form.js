import { useState } from "react";
import { useDispatch } from "react-redux";
import { createVideos } from "../../../features/videos/VideoSlice";

export default function Form() {
    const [newVideo, setNewVideo] = useState({})
    const dispatch = useDispatch()

    const handleChange = (e) => {
        const videoInfo = { ...newVideo };
        videoInfo[e.target.name] = e.target.value
        setNewVideo(videoInfo)
        console.log(newVideo)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
    
        dispatch(createVideos({
            title: newVideo.title,
            description: newVideo.description,
            author: newVideo.author,
            link: newVideo.link,
            thumbnail: newVideo.thumbnail,
            date: newVideo.date,
            duration: newVideo.duration,
            views: newVideo.views,
            id:new Date().toLocaleString()
        }))
    }

    return (
        <form method="POST" onSubmit={handleSubmit}>
            <div className="shadow overflow-hidden sm:rounded-md">
                <div className="px-4 py-5 bg-white sm:p-6">
                    <div className="grid grid-cols-6 gap-6">
                        <div className="col-span-6 sm:col-span-3">
                            <input type="text" name="title" onChange={handleChange} placeholder="Title" />
                        </div>

                        <div className="col-span-6 sm:col-span-3">
                            <input name="author" onChange={handleChange} placeholder="Author" />
                        </div>

                        <div className="col-span-6">
                            <textarea name="description" onChange={handleChange} placeholder="Description" />
                        </div>

                        <div className="col-span-6">
                            <input name="link" onChange={handleChange} placeholder="YouTube Video link" />
                        </div>

                        <div className="col-span-6">
                            <input name="thumbnail" onChange={handleChange} placeholder="Thumbnail link" />
                        </div>

                        <div className="col-span-6 sm:col-span-6 lg:col-span-2">
                            <input name="date" onChange={handleChange} placeholder="Upload Date" />
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <input name="duration" onChange={handleChange} placeholder="Video Duration" />
                        </div>

                        <div className="col-span-6 sm:col-span-3 lg:col-span-2">
                            <input name="views" onChange={handleChange} placeholder="Video no of views" />
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
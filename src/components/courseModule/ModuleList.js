/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';

const ModuleList = ({video}) => {
    return (
        <>
            <div class="w-full flex flex-row gap-2 mb-6 border-b-2">
            <div class="relative w-[168px] h-[94px] flex-none duration-300 hover:scale-[1.03]">
                <Link to={`/videos/${video.id}`}>
                    <img
                        src={video.thumbnail}
                        class="object-cover"
                        alt="Some video title"
                    />
                </Link>
                <p class="absolute right-2 bottom-2 bg-gray-900 text-gray-100 text-xs px-1 py">
                    {video.duration}
                </p>
            </div>

            <div clas="flex flex-col w-full">
            <Link to={`/videos/${video.id}`}>
                    <p class="text-slate-900 text-sm font-semibold">
                        {video.title}
                    </p>
                </Link>
                <a
                    class="text-gray-400 text-xs mt-2 hover:text-gray-600"
                    href=""
                >
                    {video.author}
                </a>
                <p class="text-gray-400 text-xs mt-1">
                    {video.views}
                </p>
            </div>
        </div>
        </>
    );
};

export default ModuleList;
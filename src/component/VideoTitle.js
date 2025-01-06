import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video bg-gradient-to-r from-black px-24 pt-[15%]  absolute text-white ">
      <h1 className=" text-6xl font-bold "> {title} </h1>
      <p className=" py-4 text-lg  w-1/2"> {overview} </p>
      <div >
        <button className=" hover:bg-opacity-80 bg-white text-black p-4 px-12 text-xl rounded-lg mx-2">
          {" "}
         ▶️ Play{" "}
        </button>
        <button className="bg-gray-600 text-white p-4 px-12 text-xl bg-opacity-80 rounded-lg">
          {" "}
          More Info
        </button>{" "}
      </div>
    </div>
  );
};

export default VideoTitle;

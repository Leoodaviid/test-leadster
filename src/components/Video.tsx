import React, { useState } from "react";
import ReactPlayer from "react-player";
import { FaPlay } from "react-icons/fa";

interface VideoProps {
  url: string;
  thumbnail?: string;
  width: number;
  height: number;
}

const Video = ({ url, thumbnail, width, height }: VideoProps) => {
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  const handlePlayClick = () => {
    setIsPlaying(true);
  };

  return (
    <>
      <ReactPlayer
        controls={true}
        url={url}
        width={width}
        height={height}
        style={{ opacity: isPlaying ? 1 : 0 }}
        playing={isPlaying}
      />
      {!isPlaying && (
        <>
          <img
            src={thumbnail}
            width={width}
            height={height}
            className="absolute top-0 left-0"
          />
          <button
            onClick={handlePlayClick}
            className="absolute group-hover:flex top-[42%] sm:top-[52%] left-[51%] drop-shadow-2xl transition transform -translate-x-1/2 -translate-y-1/2 text-6xl bg-transparent border-none cursor-pointer"
          >
            <FaPlay className="" size={95} color="white" />
          </button>
        </>
      )}
    </>
  );
};

export default Video;

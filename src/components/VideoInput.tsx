// src/components/VideoInput.tsx
import React, { useState } from "react";
import { useNavigate } from "react-router";

interface VideoInputProps {
  setVideoUrl: React.Dispatch<React.SetStateAction<string>>;
}

function VideoInput({ setVideoUrl }: VideoInputProps) {
  const [url, setUrl] = useState<string>("");

  const navigate = useNavigate();
  const handleLoadVideo = () => {
    setVideoUrl(url);
    navigate("/video");
  };

  return (
    <div className="mb-4">
      <label
        htmlFor="videoUrl"
        className="block text-sm font-medium text-gray-700"
      >
        Enter Video URL:
      </label>
      <input
        type="text"
        id="videoUrl"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
        className="mt-1 p-4 block w-[80%] rounded-md text-black border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        placeholder="Enter video URL here"
      />
      <button
        onClick={handleLoadVideo}
        className="mt-2 px-4 py-2 bg-blue-600 text-white rounded-md"
        disabled={url === ""}
      >
        Load Video
      </button>
    </div>
  );
}

export default VideoInput;

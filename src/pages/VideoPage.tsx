// src/pages/VideoPage.tsx
import { FC } from "react";
import VideoPlayer from "../components/VideoPlayer";
import { Caption } from "../components/VideoPlayer";

interface VideoPageProps {
  videoUrl: string;
  captions: Caption[];
}

const VideoPage: FC<VideoPageProps> = ({ videoUrl, captions }) => {
  return <VideoPlayer videoUrl={videoUrl} captions={captions} />;
};

export default VideoPage;

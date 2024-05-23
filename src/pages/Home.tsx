// src/pages/Home.tsx
import { FC } from "react";
import CaptionForm from "../components/CaptionForm";
import VideoInput from "../components/VideoInput";
import CaptionList from "../components/CaptionList";
import { Caption } from "../components/VideoPlayer";

interface HomeProps {
  setVideoUrl: React.Dispatch<React.SetStateAction<string>>;
  handleAddCaption: (captionText: string, timestamp: string) => void;
  captions: Caption[];
}

const Home: FC<HomeProps> = ({ setVideoUrl, handleAddCaption, captions }) => {
  return (
    <>
      <CaptionForm addCaption={handleAddCaption} />
      <CaptionList captions={captions} />
      <VideoInput setVideoUrl={setVideoUrl} />
    </>
  );
};

export default Home;

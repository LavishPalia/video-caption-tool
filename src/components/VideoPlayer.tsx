// src/components/VideoPlayer.tsx
import { useRef, useEffect } from "react";

export interface Caption {
  text: string;
  time: number;
}

interface VideoPlayerProps {
  videoUrl: string;
  captions: Caption[];
}

function VideoPlayer({ videoUrl, captions }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement && captions.length > 0) {
      const track = videoElement.querySelector("track");
      if (track) {
        track.src = generateVTT(captions);
        track.default = true;
        // videoElement.textTracks[0].mode = "showing";
      }
    }
  }, [captions]);

  const generateVTT = (captions: Caption[]) => {
    let vttString = "WEBVTT\n\n";
    captions.forEach((caption, index) => {
      const nextTime = captions[index + 1]
        ? captions[index + 1].time
        : caption.time + 2;
      const start = formatTime(caption.time);
      const end = formatTime(nextTime);
      vttString += `${index + 1}\n${start} --> ${end}\n${caption.text}\n\n`;
    });
    // Return data URL instead of blob URL
    return `data:text/vtt;base64,${btoa(vttString)}`;
  };

  const formatTime = (seconds: number) => {
    const h = Math.floor(seconds / 3600)
      .toString()
      .padStart(2, "0");
    const m = Math.floor((seconds % 3600) / 60)
      .toString()
      .padStart(2, "0");
    const s = (seconds % 60).toFixed(3).padStart(6, "0");
    return `${h}:${m}:${s}`;
  };

  return (
    <div id="videoContainer" className="mb-4">
      <video ref={videoRef} controls className="w-full aspect-video">
        <source src={videoUrl} />
        <track kind="captions" srcLang="en" label="English" />
      </video>
    </div>
  );
}

export default VideoPlayer;

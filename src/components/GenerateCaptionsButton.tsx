import { Caption } from "./VideoPlayer";

// src/components/GenerateCaptionsButton.jsx
interface GenerateCaptionsButtonProps {
  captions: { text: string; time: number }[];
  onGenerate: (vttUrl: string) => void;
}
function GenerateCaptionsButton({
  captions,
  onGenerate,
}: GenerateCaptionsButtonProps) {
  const handleGenerateCaptions = () => {
    const vttUrl = generateVTT(captions);
    onGenerate(vttUrl);
  };

  const generateVTT = (captions: Caption[]) => {
    let vttString = "WEBVTT\n\n";
    captions.forEach(
      (caption: { text: string; time: number }, index: number) => {
        const nextTime = captions[index + 1]
          ? captions[index + 1].time
          : caption.time + 2;
        const start = formatTime(caption.time);
        const end = formatTime(nextTime);
        vttString += `${index + 1}\n${start} --> ${end}\n${caption.text}\n\n`;
      }
    );

    const blob = new Blob([vttString], { type: "text/vtt" });
    return URL.createObjectURL(blob);
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
    <div id="generateCaptions" className="mb-4">
      <button
        onClick={handleGenerateCaptions}
        className="px-4 py-2 bg-indigo-600 text-white rounded-md"
      >
        Generate Captions
      </button>
    </div>
  );
}

export default GenerateCaptionsButton;

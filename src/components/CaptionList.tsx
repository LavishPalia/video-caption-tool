// src/components/CaptionList.jsx

interface CaptionListProps {
  captions: { text: string; time: number }[];
}

function CaptionList({ captions }: CaptionListProps) {
  return (
    <div id="captionList" className="mb-4">
      <h2 className="text-xl font-bold mb-2">Added Captions</h2>
      <ul className="list-disc list-inside">
        {captions.map((caption, index) => (
          <li key={index} className="mb-1">
            <span className="font-bold">{caption.time.toFixed(1)}s:</span>{" "}
            {caption.text}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CaptionList;

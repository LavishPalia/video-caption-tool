// src/components/CaptionForm.jsx
import { useState } from "react";

interface CaptionFormProps {
  addCaption: (captionText: string, timestamp: number) => void;
}

function CaptionForm({ addCaption }: CaptionFormProps) {
  const [captionText, setCaptionText] = useState("");
  const [timestamp, setTimestamp] = useState("");

  const handleAddCaption = () => {
    if (captionText && timestamp) {
      addCaption(captionText, parseFloat(timestamp));
      setCaptionText("");
      setTimestamp("");
    }
  };

  return (
    <div id="captionForm" className="mb-4">
      <h2 className="text-xl font-bold mb-2">Add Captions</h2>
      <textarea
        id="captionText"
        value={captionText}
        onChange={(e) => setCaptionText(e.target.value)}
        className="p-2 border rounded-md w-[80%] block text-black"
        placeholder="Enter your caption here"
      />
      <label
        htmlFor="timestamp"
        className="block text-sm font-medium text-gray-700 mt-2"
      >
        Enter Timestamp (seconds):
      </label>
      <input
        type="number"
        id="timestamp"
        value={timestamp}
        onChange={(e) => setTimestamp(e.target.value)}
        step="0.1"
        className="p-2 border rounded-md w-[80%] block text-black"
      />
      <button
        onClick={handleAddCaption}
        className="mt-2 px-4 py-2 bg-green-600 text-white rounded-md"
      >
        Add Caption
      </button>
    </div>
  );
}

export default CaptionForm;

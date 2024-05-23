import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import VideoPage from "./pages/VideoPage";
import { Caption } from "./components/VideoPlayer";

function App() {
  const [videoUrl, setVideoUrl] = useState<string>("");
  const [captions, setCaptions] = useState<Caption[]>([]);

  const handleAddCaption = (captionText: string, timestamp: string) => {
    setCaptions([
      ...captions,
      { text: captionText, time: parseFloat(timestamp) },
    ]);
  };

  return (
    <div className="container mx-auto p-4 max-w-[720px]">
      <h1 className="text-3xl font-bold mb-6">Video Caption Tool</h1>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                setVideoUrl={setVideoUrl}
                handleAddCaption={handleAddCaption}
                captions={captions}
              />
            }
          />
          <Route
            path="/video"
            element={<VideoPage videoUrl={videoUrl} captions={captions} />}
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

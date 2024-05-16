import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "../pages/dashboard/Dashboard";
import VideoEditor from "../pages/videoEditor/VideoEditor";


const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/video-editor" element={<VideoEditor />} />
    </Routes>
  );
};

export default PublicRoutes;

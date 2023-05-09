import { Routes, Route, Navigate } from "react-router-dom";

export default function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<div>Hello World</div>} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

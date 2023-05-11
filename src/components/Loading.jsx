/* eslint-disable no-unused-vars */
import { useEffect } from "react";

export default function Loading() {
  return (
    <>
      <div className="spinner">
        <div className="blob top" />
        <div className="blob bottom" />
        <div className="blob left" />

        <div className="blob move-blob" />
      </div>
    </>
  );
}

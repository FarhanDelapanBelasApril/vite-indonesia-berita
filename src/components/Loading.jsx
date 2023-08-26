/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";

export default function Loading() {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <>
      {isLoading && (
        <div className="spinner">
          <div className="blob top" />
          <div className="blob bottom" />
          <div className="blob left" />

          <div className="blob move-blob" />
        </div>
      )}
    </>
  );
}

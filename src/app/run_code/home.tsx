//@ts-nocheck

"use client";
import React, { useState, useEffect } from "react";
import Compiler from "./compiler";
import Output from "./output";

// Helper function to extract URL parameters
const getURLParams = () => {
  const params = new URLSearchParams(window.location.search);
  return {
    codeType: params.get("codeType") || "html", // Default to HTML
    code: decodeURIComponent(params.get("code") || ""),
  };
};

export default function Home() {
  const [leftWidth, setLeftWidth] = useState(50); // 50% width for compiler
  const [htmlContent, setHtmlContent] = useState("");
  const [codeType, setCodeType] = useState("html"); // Default code type
  const [initialCode, setInitialCode] = useState(""); // Initial code from URL

  useEffect(() => {
    const { codeType: urlCodeType, code: urlCode } = getURLParams();
    setCodeType(urlCodeType);
    setInitialCode(urlCode);
  }, []);

  const handleRunCode = (code, type) => {
    setHtmlContent(code);
    setCodeType(type);
  };

  return (
    <div className="flex h-screen w-full bg-gray-100 text-black">
      <div
        className="flex-shrink-0 border-r-4 border-black"
        style={{ width: `${leftWidth}%` }}
      >
        <Compiler
          onRun={handleRunCode}
          codeType={codeType}
          code={initialCode}
        />
      </div>
      <div
        onMouseDown={(e) => {
          const startX = e.clientX;
          const onMouseMove = (event) => {
            const deltaX = event.clientX - startX;
            const newWidth = Math.min(80, Math.max(20, leftWidth + (deltaX / window.innerWidth) * 100));
            setLeftWidth(newWidth);
          };
          const onMouseUp = () => {
            window.removeEventListener("mousemove", onMouseMove);
            window.removeEventListener("mouseup", onMouseUp);
          };
          window.addEventListener("mousemove", onMouseMove);
          window.addEventListener("mouseup", onMouseUp);
        }}
        className="w-2 bg-black cursor-ew-resize"
        title="Drag to resize"
      ></div>
      <div className="flex-grow">
        <Output htmlContent={htmlContent} codeType={codeType} />
      </div>
    </div>
  );
}

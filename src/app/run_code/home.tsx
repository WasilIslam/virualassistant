//@ts-nocheck
"use client";
import { useRef, useState } from "react";
import Compiler from "./compiler";
import Output from "./output";

export default function Home() {
  const [leftWidth, setLeftWidth] = useState(50); // 50% width for compiler
  const [htmlContent, setHtmlContent] = useState("");
  const [codeType, setCodeType] = useState("html"); // Default to HTML
  const containerRef = useRef(null);

  const handleDrag = (e) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      const newWidth = ((e.clientX - rect.left) / rect.width) * 100;
      setLeftWidth(Math.max(20, Math.min(80, newWidth))); // Limit widths between 20% and 80%
    }
  };

  const stopDragging = () => {
    document.removeEventListener("mousemove", handleDrag);
    document.removeEventListener("mouseup", stopDragging);
  };

  const startDragging = () => {
    document.addEventListener("mousemove", handleDrag);
    document.addEventListener("mouseup", stopDragging);
  };

  const handleRunCode = (code, selectedType) => {
    setHtmlContent(code);
    setCodeType(selectedType); // Update the code type
  };

  return (
    <div
      ref={containerRef}
      className="flex h-screen w-full bg-gray-100 text-black sketch-bg"
    >
      <div
        className="flex-shrink-0 border-r-4 border-black"
        style={{ width: `${leftWidth}%` }}
      >
        <Compiler onRun={handleRunCode} />
      </div>
      <div
        onMouseDown={startDragging}
        className="w-2 bg-black cursor-ew-resize"
        title="Drag to resize"
      ></div>
      <div className="flex-grow">
        <Output htmlContent={htmlContent} codeType={codeType} />
      </div>
    </div>
  );
}

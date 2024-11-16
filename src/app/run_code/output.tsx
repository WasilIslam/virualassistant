//@ts-nocheck
"use client";
import React, { useState, useEffect } from "react";

export default function Output({ htmlContent, codeType }) {
  const [consoleLogs, setConsoleLogs] = useState([]);

  useEffect(() => {
    if (codeType === "javascript") {
      // Clear logs when switching to JavaScript
      setConsoleLogs([]);
    }
  }, [codeType]);

  // Run JavaScript code and capture logs
  const runJavaScript = (code) => {
    const logs = [];
    const originalConsoleLog = console.log;
    const originalConsoleError = console.error;

    // Override console methods
    console.log = (message) => logs.push({ type: "log", message });
    console.error = (message) => logs.push({ type: "error", message });

    try {
      eval(code); // Run JavaScript
    } catch (error) {
      logs.push({ type: "error", message: error.message });
    }

    // Restore console methods
    console.log = originalConsoleLog;
    console.error = originalConsoleError;

    setConsoleLogs(logs); // Update captured logs
  };

  useEffect(() => {
    if (codeType === "javascript") {
      runJavaScript(htmlContent);
    }
  }, [htmlContent, codeType]);

  return (
    <div className="p-4 border-4 border-black rounded-md bg-gray-50 text-black">
      <h2 className="text-xl font-bold pb-2 mb-4">Output Screen</h2>
      {codeType === "html" ? (
        <iframe
          title="output"
          style={{height:"70vh"}}
          className="w-full border-4 border-black"
          srcDoc={htmlContent}
          sandbox="allow-scripts allow-same-origin"
        ></iframe>
      ) : (
        <div className="mt-4 p-4 bg-gray-800 text-white rounded-md border-4 border-black">
          <h3 className="text-lg font-bold mb-2">Console Output:</h3>
          <div className="overflow-y-auto max-h-40">
            {consoleLogs.length > 0 ? (
              consoleLogs.map((log, index) => (
                <div
                  key={index}
                  className={`mb-2 ${
                    log.type === "error" ? "text-red-500" : "text-green-400"
                  }`}
                >
                  {log.message}
                </div>
              ))
            ) : (
              <div>No console output</div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

//@ts-nocheck

"use client";
import React, { useRef, useState, useEffect } from "react";
import Editor from "@monaco-editor/react";
import { useSearchParams } from "next/navigation";

export default function Compiler({ onRun }) {
  const editorRef = useRef(null);
  const [codeType, setCodeType] = useState("html");
  const [code, setCode] = useState(""); // Code from URL or default
  const [key, setKey] = useState(0); // Force re-render editor
  const searchParams = useSearchParams(); // For accessing URL parameters

  useEffect(() => {
    setTimeout(() => {
      // Decode and set `codeType` and `code` from URL parameters
      const urlCodeType = searchParams.get("codeType");
      const urlCode = searchParams.get("code");

      if (urlCodeType) {
        setCodeType(decodeURIComponent(urlCodeType));
      }

      if (urlCode) {
        setCode(decodeURIComponent(urlCode));
      }
    }, 0);
  }, []);

  // Force Monaco to reinitialize when the code type changes
  useEffect(() => {
    setKey((prevKey) => prevKey + 1);
  }, [codeType]);

  const handleEditorDidMount = (editor, monaco) => {
    editorRef.current = editor;

    // Apply appropriate language settings
    if (codeType === "html") {
      monaco.languages.html.htmlDefaults.setOptions({
        validate: true,
        suggest: { html5: true },
      });
    } else if (codeType === "javascript") {
      monaco.languages.typescript.javascriptDefaults.setCompilerOptions({
        target: monaco.languages.typescript.ScriptTarget.ES2020,
        allowNonTsExtensions: true,
      });

      monaco.languages.registerCompletionItemProvider("javascript", {
        provideCompletionItems: () => ({
          suggestions: [
            {
              label: "console.log",
              kind: monaco.languages.CompletionItemKind.Snippet,
              insertText: "console.log(${1:variable});",
              insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
              documentation: "Log output to the console",
            },
          ],
        }),
      });
    }

    // Set the editor value to the decoded code
    if (code) {
      editor.setValue(code);
    }
  };

  const handleRun = () => {
    const currentCode = editorRef.current?.getValue() || "";
    onRun(currentCode, codeType);
  };

  const getDefaultValue = () => {
    if (code) return code; // Use URL-decoded code if available

    if (codeType === "html") {
      return `<html>
<head>
  <title>Example</title>
</head>
<body>
  <h1>Hello, World!</h1>
  <p>This is a simple HTML example.</p>
</body>
</html>`;
    } else if (codeType === "javascript") {
      return `// Write your JavaScript code here
console.log("Hello, JavaScript!");
`;
    }
    return "";
  };

  return (
    <div className="p-4 bg-gray-50 text-black border-4 border-black rounded-md">
      <h2 className="text-xl font-bold pb-2 mb-4">Code Compiler</h2>
      <div className="mb-4">
        <label htmlFor="codeType" className="block font-bold mb-2">
          Select Code Type:
        </label>
        <select id="codeType" value={codeType} onChange={(e) => setCodeType(e.target.value)} className="p-2 border-4 border-black rounded-md bg-white">
          <option value="html">HTML</option>
          <option value="javascript">JavaScript</option>
        </select>
      </div>
      <div className="border-4 border-black rounded-md overflow-hidden">
        <Editor
          key={key} // Re-render editor when code type changes
          height="500px"
          defaultLanguage={codeType}
          theme="vs-light"
          onMount={handleEditorDidMount}
          defaultValue={getDefaultValue()}
        />
      </div>
      <button onClick={handleRun} className="mt-4 px-4 py-2 bg-gray-800 text-white border-4 border-black rounded-md hover:bg-gray-600 transition">
        Run Code
      </button>
    </div>
  );
}

"use client";
import React, { useRef, useState, useEffect } from "react";
import Editor from "@monaco-editor/react";

export default function Compiler({ onRun, codeType: initialCodeType, code: initialCode }) {
  const editorRef = useRef(null);
  const [codeType, setCodeType] = useState(initialCodeType || "html");
  const [key, setKey] = useState(0); // Force rerender editor

  // Force Monaco to reinitialize when the code type changes
  useEffect(() => {
    setKey((prevKey) => prevKey + 1);
  }, [codeType]);

  useEffect(() => {
    if (initialCode && initialCodeType) {
      onRun(initialCode, initialCodeType); // Automatically run if props are provided
    }
  }, [initialCode, initialCodeType, onRun]);

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
              insertTextRules:
                monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
              documentation: "Log output to the console",
            },
          ],
        }),
      });
    }
  };

  const handleRun = () => {
    const code = editorRef.current?.getValue() || "";
    onRun(code, codeType);
  };

  const getDefaultValue = () => {
    if (initialCode) return initialCode;
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
        <select
          id="codeType"
          value={codeType}
          onChange={(e) => setCodeType(e.target.value)}
          className="p-2 border-4 border-black rounded-md bg-white"
        >
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
      <button
        onClick={handleRun}
        className="mt-4 px-4 py-2 bg-gray-800 text-white border-4 border-black rounded-md hover:bg-gray-600 transition"
      >
        Run Code
      </button>
    </div>
  );
}

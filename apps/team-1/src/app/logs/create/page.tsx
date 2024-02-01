"use client";

import { ChangeEvent, useState } from "react";
import dynamic from "next/dynamic";
import "@uiw/react-md-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";
// import * as commands from "@uiw/react-md-editor/commands";
import { ContextStore } from "@uiw/react-md-editor";

const MDEditor = dynamic(() => import("@uiw/react-md-editor"), { ssr: false });

const LogsCreate = () => {
  const [value, setValue] = useState<string>("**Hello world!!!**");
  const handleInputText = (
    value?: string,
    event?: ChangeEvent<HTMLTextAreaElement>,
    state?: ContextStore,
  ) => {
    if (event) setValue(event.target.value);
  };

  console.log(value);

  return (
    <div>
      <MDEditor value={value} onChange={handleInputText} />
    </div>
  );
};

export default LogsCreate;

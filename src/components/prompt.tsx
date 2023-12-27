"use client";

import { useState } from "react";

// This is an input form for the user to enter a prompt for the AI to generate a response to.
export default function Prompt() {
  const [query, setQuery] = useState<string>("");

  const processPrompt = () => {
    console.log(query);
  };

  return (
    <div className="w-full">
      <div>
        <input
          className="w-full p-4"
          type="text"
          placeholder="Enter a prompt"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        ></input>
      </div>
      <div className="text-center my-3">
        <button
          onClick={(e) => processPrompt()}
          className="bg-slate-700 hover:bg-black text-white font-bold py-4 px-8 rounded"
        >
          Generate
        </button>
      </div>
    </div>
  );
}

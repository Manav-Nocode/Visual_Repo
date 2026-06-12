"use client";
import { GithubInfo, handleurl } from "@/lib/getDetails";
import React, { useReducer, useState } from "react";

const Header = () => {
  const [repoDetails, setRepoDetails] = useState<GithubInfo | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(formdata: FormData) {
    setError(null);
    const urlAdress = formdata.get("link") as string;
    if (!urlAdress) return;

    const result = handleurl(urlAdress);
    if (result) {
      setRepoDetails(result);
    } else {
      setRepoDetails(null);
      setError("Please enter a valid GitHub repository URL");
    }
  }

  return (
    <header className="w-full bg-white border-b border-zinc-200 h-20 px-8 flex items-center justify-between">
      {/* Left side: Search Form */}
      <div className="w-full max-w-xl">
        <form action={handleSubmit} className="relative flex items-center">
          <input
            type="text"
            name="link"
            placeholder="Enter GitHub repository URL..."
            className="w-full h-10 bg-zinc-50 rounded-xl pl-4 pr-20 text-sm border border-zinc-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all text-zinc-900"
          />
          <button
            type="submit"
            className="absolute right-1.5 h-7 px-4 bg-zinc-900 hover:bg-zinc-800 text-white text-xs font-medium rounded-lg transition-colors"
          >
            Analyze
          </button>
        </form>
        {error && <p className="text-xs text-red-500 mt-1 absolute">{error}</p>}
      </div>

      {/* Right side: Real-time Data Display Indicator */}
      {repoDetails && (
        <div className="flex items-center gap-2 bg-blue-50 border border-blue-100 px-3 py-1.5 rounded-lg">
          <span className="text-xs font-medium text-blue-700">
            {repoDetails.username} / {repoDetails.repo}
          </span>
        </div>
      )}
    </header>
  );
};

export default Header;

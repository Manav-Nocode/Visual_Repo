"use client";

import { GithubInfo } from "@/lib/getDetails";
import React, { useState } from "react";

type Props = {
  setInputUrl: (url: string) => void;
  repos?: GithubInfo | null;
};

const Header = ({ setInputUrl, repos }: Props) => {
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(formdata: FormData) {
    setError(null);
    const urlAdress = formdata.get("link") as string;

    if (!urlAdress?.trim()) {
      setError("Please provide a repository link");
      return;
    }

    setInputUrl(urlAdress);
  }

  return (
    <header className="w-full bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 shadow-md h-20 px-8 flex items-center justify-between border-b-2 border-orange-700">
      {" "}
      {/* Left side: Search Form Container */}
      <div className="w-full max-w-xl">
        <form
          action={handleSubmit}
          className="relative flex items-center group"
        >
          <input
            type="text"
            name="link"
            placeholder="⚡ Paste GitHub repository URL here..."
            className="w-full h-11 bg-white/95 rounded-xl pl-4 pr-24 text-sm font-medium border border-transparent shadow-inner focus:outline-none focus:bg-white text-zinc-900 placeholder-zinc-400 transition-all focus:ring-2 focus:ring-white/50"
          />
          <button
            type="submit"
            className="absolute right-1.5 h-8 px-5 bg-zinc-900 hover:bg-zinc-800 text-orange-400 text-xs font-bold rounded-lg transition-transform active:scale-95 shadow cursor-pointer"
          >
            Analyze
          </button>
        </form>
        {error && (
          <p className="text-xs text-yellow-200 drop-shadow font-semibold mt-1 absolute bg-orange-700/80 px-2 py-0.5 rounded">
            {error}
          </p>
        )}
      </div>
      {/* Right side: Repository Status Badge */}
      {repos?.username && repos?.repo ? (
        <div className="flex items-center gap-2 bg-zinc-900/90 border border-orange-400/30 px-4 py-2 rounded-xl shadow-md animate-fade-in">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span className="text-xs font-bold text-zinc-100 tracking-wide">
            {repos.username} <span className="text-orange-400">/</span>{" "}
            {repos.repo}
          </span>
        </div>
      ) : (
        <div className="hidden sm:flex items-center bg-white/10 px-4 py-2 rounded-xl border border-white/10">
          <span className="text-xs font-medium text-orange-50 text-opacity-80">
            Ready to scan workspace
          </span>
        </div>
      )}
    </header>
  );
};

export default Header;

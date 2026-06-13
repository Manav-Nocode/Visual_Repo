"use client";
import Header from "@/components/Header";
import React, { useState } from "react";
import { useRepo } from "@/hooks/userepo";
import Fileicon from "@/icons/Fileicon";
import FolderIcon from "@/icons/FolderIcon";
import MainGridArea from "@/components/MainGridArea";

const Homepage = () => {
  const [inputUrl, setInputUrl] = useState("");
  const { data, error, isLoading } = useRepo(inputUrl);
  if (data) {
    console.log(data.data);
  }

  return (
    <div className="flex flex-col flex-1 bg-zinc-50 min-h-screen">
      <Header setInputUrl={setInputUrl} repos={data} />
      <main
        className="flex-1 p-8"
        style={{
          backgroundColor: "#fafafa",
          backgroundImage: "radial-gradient(#e4e4e7 1.5px, transparent 1.5px)",
          backgroundSize: "24px 24px",
        }}
      >
        {/* main area */}
        <MainGridArea repoData={data?.data} />
      </main>
    </div>
  );
};

export default Homepage;

import Header from "@/components/Header";
import React from "react";

const Homepage = () => {
  return (
    <div className="flex flex-col flex-1 bg-zinc-50 min-h-screen">
      <Header />
      <main className="p-8 flex-1">
        <div className="border-2 border-dashed border-zinc-200 rounded-xl h-full p-6 bg-white">
          <p className="text-zinc-600 font-medium">Dashboard Main Workspace</p>
        </div>
      </main>
    </div>
  );
};

export default Homepage;

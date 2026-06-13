import React from "react";
import { CiFolderOn } from "react-icons/ci";

const FolderIcon = ({ name, onpress }) => {
  function handlePress(url: string) {
    console.log(url);
  }
  return (
    <div
      className="flex justify-center items-center gap-2"
      onClick={() => handlePress(onpress)}
    >
      <div>
        <CiFolderOn size={25} />
      </div>
      <p>{name}</p>
    </div>
  );
};

export default FolderIcon;

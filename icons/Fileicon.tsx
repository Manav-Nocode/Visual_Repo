import React from "react";
import { CiFileOn } from "react-icons/ci";

const Fileicon = ({ name, onpress }) => {
  function handlePress(url: string) {
    window.location.href = url;
  }
  return (
    <div
      className="flex justify-center items-center gap-2"
      onClick={() => handlePress(onpress)}
    >
      <div>
        <CiFileOn size={25} />
      </div>
      <p>{name}</p>
    </div>
  );
};

export default Fileicon;

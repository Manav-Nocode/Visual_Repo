import React from "react";
import { CiFileOn } from "react-icons/ci";
import { LuFile } from "react-icons/lu";

const Fileicon = ({ name, onpress }) => {
  async function handlePress(url: string) {
    // window.open(url, "_blank");
    console.log(url);
    const res = await fetch(url);
    const data = await res.json();
    let encoded_content = data.content;
    encoded_content = encoded_content.replace("/\n/g", "");
    let decoded_code = Buffer.from(encoded_content, "base64").toString("utf-8");

    console.log(decoded_code);
  }
  return (
    <div
      className="flex justify-center items-center mb-1.5 hover:cursor-pointer hover:bg-amber-200"
      onClick={() => handlePress(onpress)}
    >
      <div className="pr-2">
        <LuFile size={22} />
      </div>
      <p>{name}</p>
    </div>
  );
};

export default Fileicon;

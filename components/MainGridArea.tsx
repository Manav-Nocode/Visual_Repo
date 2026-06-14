import Fileicon from "@/icons/Fileicon";
import FolderIcon from "@/icons/FolderIcon";
import { repoDetailedTypes } from "@/lib/manageRepo";
import React from "react";
interface Props {
  repoData: repoDetailedTypes[];
}
const MainGridArea = ({ repoData }: Props) => {
  return (
    <div className="w-full h-full flex flex-col gap-y-15">
      <div className="font-bold flex items-center justify-center text-4xl">
        <h1 className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-wider">
          Main Grid Area
        </h1>
      </div>
      <li className="flex flex-col  items-baseline" id="files_outermost_div">
        {repoData?.map((item, idx) => {
          if (item.type == "file") {
            return (
              <div id="filebgcolor" key={idx} className="">
                <Fileicon name={item.name} onpress={item.url} />
              </div>
            );
          } else {
            return (
              <div className="" key={idx}>
                {" "}
                <FolderIcon name={item.name} onpress={item.url} />
              </div>
            );
          }
        })}
      </li>
    </div>
  );
};

export default MainGridArea;

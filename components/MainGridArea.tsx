import Fileicon from "@/icons/Fileicon";
import FolderIcon from "@/icons/FolderIcon";
import { repoDetailedTypes } from "@/lib/manageRepo";
import React from "react";
interface Props {
  repoData: repoDetailedTypes[];
}
const MainGridArea = ({ repoData }: Props) => {
  return (
    <div className="w-full h-full flex flex-col gap-y-5">
      MainGridArea
      <li className="flex flex-col items-baseline gap-y-2">
        {repoData?.map((item, idx) => {
          if (item.type == "file") {
            return <Fileicon name={item.name} onpress={item.download_url} />;
          } else {
            return <FolderIcon name={item.name} onpress={item.url} />;
          }
        })}
      </li>
    </div>
  );
};

export default MainGridArea;

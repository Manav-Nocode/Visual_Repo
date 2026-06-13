export type linksType = {
  self: string;
  git: string;
  html: string;
};
export type repoDetailedTypes = {
  name: string;
  path: string;
  sha: string;
  size: number;
  url: string;
  html_url: string;
  git_url: string;
  download_url: string | null;
  type: string;
  _links: linksType;
};

// type file = {
//   name: string;
//   toShowCode: string;
// };

// type folder = {
//   name: string;
//   children: (folder | file)[];
// };

// export function manageRepo(data: repoDetailedTypes[]) {
//   if (!data || !Array.isArray(data)) {
//     console.log("api error");
//     return null;
//   }
//   const files = data.map((f) => {
//     if (f.type == "file") {
//       return {
//         name: f.name,
//         toShowCode: f.download_url,
//       };
//     }
//   });
//   const folders = data.map((dir) => {
//     if (dir.type == "dir") {
//       return {
//         name: dir.name,
//         children: dir.url,
//       };
//     }
//   });

//   return {
//     files,
//     folders,
//   };
// }

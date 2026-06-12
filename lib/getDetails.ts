// example = "https://api.github.com/repos/666ghj/MiroFish/contents"
// https://github.com/666ghj/MiroFish

export interface GithubInfo {
  username: string;
  repo: string;
}
export function handleurl(url: string): GithubInfo | null {
  if (!url.trim()) return null;

  const cleanUrl = url.trim();
  const starting = "https://github.com/";

  if (!cleanUrl.startsWith(starting)) {
    console.error("Invalid URL: Does not start with github.com");
    return null;
  }

  const path = cleanUrl.replace(starting, "");
  const part = path.split("/");

  if (part.length < 2 || !part[0] || !part[1]) {
    console.error("Invalid URL: Could not parse username and repo");
    return null;
  }

  return {
    username: part[0],
    repo: part[1],
  };
}

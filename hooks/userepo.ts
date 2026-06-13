import { useQuery } from "@tanstack/react-query";
import { apiRepoDetails } from "@/lib/getDetails";

export function useRepo(url: string) {
  return useQuery({
    queryKey: ["repo", url],
    queryFn: () => apiRepoDetails(url),
    enabled: !!url,
  });
}

import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/settingsApi";

export function useSettings() {
  const { isLoading, data: settings } = useQuery({
    queryKey: ["settings"],
    queryFn: getSettings,
  });

  return { isLoading, settings };
}

import { useQuery } from "@tanstack/react-query";

import { getBookings } from "../../services/bookingsApi";
import { useSearchParams } from "react-router-dom";

export function useBookings() {
  const [SearchParams] = useSearchParams();
  const filterValue = SearchParams.get("status");
  const filter =
    !filterValue || filterValue === "all"
      ? null
      : { field: "status", value: filterValue };

  const page = !SearchParams.get("page") ? 1 : Number(SearchParams.get("page"));

  const { isLoading, data: { data: bookings, count } = {} } = useQuery({
    queryKey: ["bookings", filter, page],
    queryFn: () => getBookings({ filter, page }),
  });

  return { isLoading, bookings, count };
}

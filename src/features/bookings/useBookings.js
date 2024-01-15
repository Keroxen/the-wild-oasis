import { useSearchParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";

import { getBookings } from "../../services/apiBookings.js";

export function useBookings() {
    const [searchParams] = useSearchParams();

    // FILTER
    const filterValue = searchParams.get("status");
    const filter = !filterValue || filterValue === "all" ? null : {
        field: "status",
        value: filterValue
    };

    const { isLoading, data: bookings, error } = useQuery({
        queryKey: ['bookings', filter], // fetches the data when filter changes, like a dep array
        queryFn: () => getBookings({ filter })
    })

    return { isLoading, bookings, error }
}

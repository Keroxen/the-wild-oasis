import styled from "styled-components";

import Stats from "./Stats.jsx";
import { useRecentBookings } from "./useRecentBookings.js";
import { useRecentStays } from "./useRecentStays.js";
import Spinner from "../../ui/Spinner.jsx";
import { useCabins } from "../cabins/useCabins.js";

const StyledDashboardLayout = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: auto 34rem auto;
    gap: 2.4rem;
`;

const DashboardLayout = () => {
    const { bookings, isLoading: isLoading1 } = useRecentBookings();
    const { stays, confirmedStays, isLoading: isLoading2, numDays } = useRecentStays();
    const { cabins, isLoading: isLoading3 } = useCabins();

    if (isLoading1 || isLoading2 || isLoading3) {
        return <Spinner />;
    }

    return (
        <StyledDashboardLayout>
            <Stats bookings={bookings} confirmedStays={confirmedStays} numDays={numDays} cabinCount={cabins.length} />
            <div>Statistics</div>
            <div>Today&apos;s activity</div>
            <div>Chart stay durations</div>
            <div>Chart sales</div>
        </StyledDashboardLayout>
    );
};

export default DashboardLayout;

import Heading from "../ui/Heading";
import Row from "../ui/Row";
import DashboardLayout from "../features/dashboard/DashboardLayout.jsx";
import DashboardFilter from "../features/dashboard/DashboardFilter.jsx";
import { useRecentBookings } from "../features/dashboard/useRecentBookings.js";
import Spinner from "../ui/Spinner.jsx";
import { useRecentStays } from "../features/dashboard/useRecentStays.js";

function Dashboard() {
    const { bookings, isLoading: isLoading1 } = useRecentBookings();
    const { stays, confirmedStays, isLoading: isLoading2 } = useRecentStays();

    if (isLoading1 || isLoading2) {
        return <Spinner />;
    }

    console.log(bookings);

    return (
        <>
            <Row type="horizontal">
                <Heading as="h1">Dashboard</Heading>
                <DashboardFilter />
            </Row>

            <DashboardLayout />
        </>
    );
}

export default Dashboard;

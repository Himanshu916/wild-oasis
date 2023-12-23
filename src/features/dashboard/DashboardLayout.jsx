/* eslint-disable no-unused-vars */
import styled from "styled-components";
import Heading from "../../ui/Heading";
import Row from "../../ui/Row";

import DashboardFilter from "./DashboardFilter";
import { useRecentBookings } from "./useRecentBookings";
import { useRecentStays } from "./useRecentStays";
import Stats from "./Stats";
import { useCabins } from "../cabins/useCabins";
import SalesChart from "./SalesChart";
import DurationChart from "./DurationChart";
import TodayActivity from "../check-in-out/TodayActivity";
// import Spinner from "../../ui/Spinner";
const StyledDashboard = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto 34rem auto;
  gap: 2.4rem;
`;

function DashboardLayout() {
  const { isLoading, bookings } = useRecentBookings();
  const {
    stays,
    confirmedStays,
    isLoading: isLoading2,
    numDays,
  } = useRecentStays();
  const { cabins, isLoading: isLoading3 } = useCabins();
  if (isLoading || isLoading2 || isLoading3) return <p> Loading;</p>;
  console.log(bookings);
  return (
    <>
      <StyledDashboard>
        <Stats
          bookings={bookings}
          confirmedStays={confirmedStays}
          numDays={numDays}
          cabinCount={cabins.length}
        />
        <TodayActivity />
        <DurationChart confirmedStays={confirmedStays} />
        <SalesChart bookings={bookings} numDays={numDays} />
      </StyledDashboard>
    </>
  );
}

export default DashboardLayout;

//

// getbookingsafter date
// focus here is how to dispay data

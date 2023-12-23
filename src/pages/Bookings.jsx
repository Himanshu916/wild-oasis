import Heading from "../ui/Heading.jsx";
import Row from "../ui/Row";
import BookingTable from "../features/bookings/BookingTable.jsx";
import BookingTableOperations from "../features/bookings/BookingTableOperations.jsx";

function Bookings() {
  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All Bookings</Heading>
        <BookingTableOperations />
      </Row>
      <Row>
        <BookingTable />
      </Row>
    </>
  );
}

export default Bookings;

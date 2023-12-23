import Filter from "../../ui/Filter";
// import SortBy from "../../ui/SortBy";
import TableOperations from "../../ui/TableOperations";

function BookingTableOperations() {
  return (
    <TableOperations>
      <Filter
        fieldValue="status"
        options={[
          { value: "all", label: "All" },
          { value: "checked-out", label: "Checked Out" },
          { value: "checked-in", label: "Checked In" },
          { value: "unconfirmed", label: "UnConfirmed" },
        ]}
      />
      {/* <SortBy
        options={[
          { value: "name-asc", label: "Sort by name (A-Z)" },
          { value: "name-desc", label: "Sort by name (Z-A)" },
          { value: "regularPrice-asc", label: "Sort by price (low first)" },
          { value: "regularPrice-desc", label: "Sort by price (high first)" },
          { value: "maxCapacity-asc", label: "Sort by capacity (low first)" },
          { value: "maxCapacity-desc", label: "Sort by capacity (high first)" },
        ]}
      /> */}
    </TableOperations>
  );
}

export default BookingTableOperations;

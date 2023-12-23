import { useSearchParams } from "react-router-dom";
import Select from "./Select";

function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") || "";
  function changeHandler(e) {
    console.log(e);
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }

  return <Select onChange={changeHandler} value={sortBy} options={options} />;
}

export default SortBy;

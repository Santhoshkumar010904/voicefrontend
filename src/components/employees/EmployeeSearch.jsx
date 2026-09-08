import { FaSearch } from "react-icons/fa";

function EmployeeSearch() {
  return (
    <div className="employee-search">

      <FaSearch />

      <input
        type="text"
        placeholder="Search employees..."
      />

    </div>
  );
}

export default EmployeeSearch;
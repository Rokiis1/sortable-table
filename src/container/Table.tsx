import { useEffect } from "react";
import useGetCountrys from "../api/useGetCountries";
import TableBody from "../components/TableBody";
import TableHead from "../components/TableHead";

const Table = () => {
  const [dataTable, fetchState, setDataTable, getCountrys] = useGetCountrys();

  useEffect(() => {
    getCountrys();
  }, []);

  const columns = [{ label: "Name", value: "name", sortable: true }];

  const handleSorting = (sortField: boolean, sortOrder) => {
    if (sortField) {
      const sorted = [...dataTable].sort((a, b) => {
        if (a[sortField] === null) return 1;
        if (b[sortField] === null) return -1;
        if (a[sortField] === null && b[sortField] === null) return 0;
        return (
          a[sortField].toString().localeCompare(b[sortField].toString(), "en", {
            numeric: true,
          }) * (sortOrder === "asc" ? 1 : -1)
        );
      });
      setDataTable(sorted);
    }
  };

  return (
    <table>
      <TableHead {...{ columns, handleSorting }} />
      <TableBody {...{ columns, dataTable }} />
    </table>
  );
};

export default Table;

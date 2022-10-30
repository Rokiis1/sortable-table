import { useState } from "react";

type Props = {
  columns: { label: string; value: string }[];
  handleSorting: any;
};

const TableHead = ({ columns, handleSorting }: Props) => {
  const [sortField, setSortField] = useState("");
  const [order, setOrder] = useState("asc");

  const handleSortingChange = (value: string) => {
    const sortOrder = value === sortField && order === "asc" ? "desc" : "asc";
    setSortField(value);
    setOrder(sortOrder);
    handleSorting(value, sortOrder);
  };

  return (
    <thead>
      <tr>
        {columns.map(({ label, value, sortable }) => {
          const cl = sortable
            ? sortField === value && order === "asc"
              ? "up"
              : sortField === value && order === "desc"
              ? "down"
              : "default"
            : "";
          return (
            <th
              className={cl}
              key={value}
              onClick={sortable ? () => handleSortingChange(value) : null}
            >
              {label}
            </th>
          );
        })}
      </tr>
    </thead>
  );
};

export default TableHead;

import { Country } from "../interfaces/Country";

type Props = {
  dataTable: Country[];
  columns: { label: string; value: string }[];
};

const TableBody = ({ dataTable, columns }: Props) => {
  return (
    <tbody>
      {dataTable.map((data) => {
        return (
          <tr key={data.name}>
            {columns.map((value) => {
              const tData = data[value] ? data[value] : "——";
              return <td key={value}>{tData}</td>;
            })}
          </tr>
        );
      })}
    </tbody>
  );
};

export default TableBody;

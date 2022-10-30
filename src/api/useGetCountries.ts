import axios from "axios";
import { useState } from "react";
import { Country } from "../interfaces/Country";
import { FetchState } from "../interfaces/FetchState";

export const useGetCountrys = () => {
  const [fetchState, setFetchState] = useState(FetchState.DEFAULT);
  const [dataTable, setDataTable] = useState<Country[]>([]);
  const getCountrys = async () => {
    try {
      setFetchState(FetchState.LOADING);

      const response = await axios.get("https://restcountries.com/v2/all");
      const responseData = response.data as Country[];

      setDataTable(responseData);

      setFetchState(FetchState.SUCCESS);
    } catch (error) {
      setFetchState(FetchState.ERROR);
    }
  };

  return [dataTable, fetchState, setDataTable, getCountrys] as const;
};

export default useGetCountrys;

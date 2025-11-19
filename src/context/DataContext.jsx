import axios from "axios";
import { createContext, useContext, useState } from "react";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState();

  const fetchAllProducts = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      setData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getUnquieCategory = (data, property) => {
    let newVal = data?.map((curElem) => curElem[property]);
    newVal = ["All", ...new Set(newVal)];
    return newVal;
  };

  const categoryOnlyData = getUnquieCategory(data, "category");

  return (
    <DataContext.Provider
      value={{ data, setData, fetchAllProducts, categoryOnlyData }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const getData = () => useContext(DataContext);

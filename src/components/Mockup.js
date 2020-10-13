import React, { useEffect, useState } from "react";
import CustomTable from "./CustomTable";
import Pagination from "./Pagination";
import Search from "./Search";

function Mockup(props) {
  const [tableData, setTableData] = useState([]);
  const [updatedTableData, setUpdatedTableData] = useState([]);
  const [currentFirstPage, setCurrentFirstPage] = useState(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchTableData();
  }, []);

  async function fetchTableData() {
    await fetch("https://restcountries.eu/rest/v2/all")
      .then(res => {
        return res.json();
      })
      .then(data => {
        let formatData = data.map(item => {
          return {
            country: item.name,
            capital: item.capital,
            region: item.region,
            population: item.population,
            area: item.area
          };
        });
        setTableData(formatData);
        setUpdatedTableData(formatData);
        setCurrentIndex(currentFirstPage);
      });
  }

  function searchTextOnData(searchText) {
    console.log("searchText", searchText);
    let searchTextData = tableData.filter(item => {
      return (
        item.country.includes(searchText) ||
        item.capital.includes(searchText) ||
        item.region.includes(searchText) ||
        (item.population && item.population.toString().includes(searchText)) ||
        (item.area && item.area.toString().includes(searchText))
      );
    });
    console.log("searchTextData", searchTextData);
    setUpdatedTableData(searchTextData);
  }

  return (
    <div style={{ padding: "2%", textAlign: "left" }}>
      <h1 style={{ textAlign: "left" }}>Table Mockup</h1>

      <Search
        searchText={searchText}
        setSearchText={setSearchText}
        searchTextOnData={searchTextOnData}
      />

      <CustomTable currentIndex={currentIndex} tableData={updatedTableData} />
      <Pagination
        setCurrentFirstPage={setCurrentFirstPage}
        currentFirstPage={currentFirstPage}
        setCurrentIndex={setCurrentIndex}
        maxSize={updatedTableData.length}
      />
    </div>
  );
}

export default Mockup;

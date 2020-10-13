import React, { useEffect, useState } from "react";
import classes from "./Table.module.css";

function CustomTable(props) {
  // let data = Object.values(props.tableData);
  const [data, setData] = useState([]);

  useEffect(() => {
    let propData = props.tableData.slice(
      5 * props.currentIndex,
      5 * (props.currentIndex + 1)
    );
    console.log("propData", propData);
    setData(propData);
  }, [props.currentIndex, props.tableData]);
  return (
    <>
      <table className={classes.TableGrid}>
        <thead>
          <th>Country</th>
          <th>Capital</th>
          <th>Region</th>
          <th>Population</th>
          <th>Area</th>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr>
                <td
                  className={
                    index % 5 == 0 ? classes.TopBorderNone : classes.TopBorder
                  }
                >
                  {item.country}
                </td>
                <td
                  className={
                    index % 5 == 0 ? classes.TopBorderNone : classes.TopBorder
                  }
                >
                  {item.capital}
                </td>
                <td
                  className={
                    index % 5 == 0 ? classes.TopBorderNone : classes.TopBorder
                  }
                >
                  {item.region}
                </td>
                <td
                  className={
                    index % 5 == 0 ? classes.TopBorderNone : classes.TopBorder
                  }
                >
                  {item.population}
                </td>
                <td
                  className={
                    index % 5 == 0 ? classes.TopBorderNone : classes.TopBorder
                  }
                >
                  {item.area}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
}

export default CustomTable;

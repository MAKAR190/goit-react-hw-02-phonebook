import React from "react";
import styles from "./Filter.module.css";
function Filter({ filterChange, filterValue }) {
  return (
    <input
      className={styles.input}
      type="text"
      name="filter"
      value={filterValue}
      onChange={filterChange}
    ></input>
  );
}
export default Filter;

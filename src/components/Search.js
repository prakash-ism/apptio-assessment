import React, { useState } from "react";

function Search(props) {
  return (
    <>
      <input
        type="text"
        value={props.searchText}
        onChange={e => {
          props.setSearchText(e.target.value);
          props.searchTextOnData(e.target.value);
        }}
      />
    </>
  );
}

export default Search;

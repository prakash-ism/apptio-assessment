import React from "react";

function Pagination(props) {
  return (
    <div style={{ textAlign: "left" }}>
      <span
        // style={{ textAlign: "left" }}
        onClick={() =>
          props.setCurrentFirstPage(
            props.currentFirstPage < 5 ? 0 : props.currentFirstPage - 5
          )
        }
      >
        Previous
      </span>

      <span
        style={{ marginLeft: "5%" }}
        onClick={() => props.setCurrentIndex(props.currentFirstPage)}
      >
        {props.currentFirstPage + 1 > props.maxSize
          ? ""
          : props.currentFirstPage + 1}
      </span>

      <span
        style={{ marginLeft: "5%" }}
        onClick={() => props.setCurrentIndex(props.currentFirstPage + 1)}
      >
        {props.currentFirstPage + 2 > props.maxSize
          ? ""
          : props.currentFirstPage + 2}
      </span>

      <span
        style={{ marginLeft: "5%" }}
        onClick={() => props.setCurrentIndex(props.currentFirstPage + 2)}
      >
        {props.currentFirstPage + 3 > props.maxSize
          ? ""
          : props.currentFirstPage + 3}
      </span>

      <span
        style={{ marginLeft: "5%" }}
        onClick={() => props.setCurrentIndex(props.currentFirstPage + 3)}
      >
        {props.currentFirstPage + 4 > props.maxSize
          ? ""
          : props.currentFirstPage + 4}
      </span>

      <span
        style={{ marginLeft: "5%" }}
        onClick={() => props.setCurrentIndex(props.currentFirstPage + 4)}
      >
        {props.currentFirstPage + 5 > props.maxSize
          ? ""
          : props.currentFirstPage + 5}
      </span>

      <span
        style={{ marginLeft: "5%" }}
        onClick={() => props.setCurrentFirstPage(props.currentFirstPage + 5)}
      >
        Next
      </span>
    </div>
  );
}

export default Pagination;

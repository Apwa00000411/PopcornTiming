import React from "react";
import { Pagination } from "@mui/material";

export default function CustomPagination({ setPage, numOfPages = 500 }) {
  // Scroll to top when page changes
  const handlePageChange = (page) => {
    setPage(page);
    // window.scrollTo(0, 0);
  };

  return (
    <div
      style={{
        maxWidth: "100%",
        display: "flex",
        justifyContent: "center",
        // alignItems: "center",
        margin: "3rem auto",
        background: "#fff",
        padding: "2px",
        borderRadius: "10px",
      }}
    >
      <Pagination
        onChange={(e) => handlePageChange(e.target.textContent)}
        count={numOfPages}
        color="primary"
        // size="small"
        // hideNextButton
        // hidePrevButton
      />
    </div>
  );
}

import React from "react";
import { Pagination } from "@mui/material";

export default function CustomPagination({ setPage, numOfPages = 10 }) {
  // Scroll to top when page changes
  const handlePageChange = (page) => {
    setPage(page);
    // window.scroll(0, 100);
  };

  return (
    <div
      style={{
        width: "90%",
        display: "flex",
        justifyContent: "center",
        // alignItems: "center",
        margin: "5rem auto",
        background: "#fff",
        padding: "2px",
        borderRadius: "10px",
      }}
    >
      <Pagination
        onChange={(e) => handlePageChange(e.target.textContent)}
        count={500}
        color="primary"
        size="large"
        hideNextButton
        hidePrevButton
      />
    </div>
  );
}

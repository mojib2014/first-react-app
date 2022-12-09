import React from 'react';

export default function Pagination({ totalPages, nextPage, prevPage, page }) {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <button className="min-w-2 btn btn-primary" onClick={prevPage}>
        Previous
      </button>
      <span>{totalPages}</span>
      <button onClick={nextPage} className="min-w-2 btn btn-primary">
        Next
      </button>
    </div>
  );
}

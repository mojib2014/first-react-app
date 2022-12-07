import React from 'react';

export default function Pagination({ pageNumbers, setPage, page }) {
  return (
    <div className="d-flex align-items-center justify-content-center">
      <button
        className="min-w-2 btn btn-primary"
        onClick={() => setPage((page) => page - 1)}
      >
        Previous
      </button>
      {pageNumbers.slice(0, 3).map((p) => (
        <span
          key={p}
          role="button"
          onClick={() => setPage(p)}
          className={`mx-1 badge  ${
            p === page ? 'text-bg-primary' : 'text-bg-secondary'
          }`}
        >
          {p}
        </span>
      ))}
      <button
        onClick={() => setPage((page) => page + 1)}
        className="min-w-2 btn btn-primary"
      >
        Next
      </button>
    </div>
  );
}

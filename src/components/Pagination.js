import React from 'react';

const Pagination = ({ currentPage, handlePageChange }) => {
  const pages = Array.from({ length: 5 }, (_, i) => i + 1);

  return (
    <div>
      {pages.map((pageNumber) => (
        <button
          key={pageNumber}
          disabled={pageNumber === currentPage}
          onClick={() => handlePageChange(pageNumber)}
        >
          {pageNumber}
        </button>
      ))}
    </div>
  );
};

export default Pagination;

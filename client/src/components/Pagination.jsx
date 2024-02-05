// Pagination.js

import React, { useState, useEffect } from 'react';
import { CaretRight, CaretLeft } from '@phosphor-icons/react';

const Pagination = ({ totalItems, itemsPerPage, onPageChange }) => {
  const [pages, setPages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const newPages = [];

    for (let i = 1; i <= totalPages; i++) {
      newPages.push(i);
    }

    setPages(newPages);
  }, [totalItems, itemsPerPage]);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
    onPageChange(pageNumber);
  };

  const handleNextPage = () => {
    if (currentPage < pages.length) {
      setCurrentPage(currentPage + 1);
      onPageChange(currentPage + 1);
    }
  };

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      onPageChange(currentPage - 1);
    }
  };

  return (
    <div className="flex items-center gap-2 mt-4 justify-end">
      <button
        className="h-8 w-8 flex items-center justify-center rounded bg-orange-100 hover:bg-orange-400"
        onClick={handlePrevPage}
        disabled={currentPage === 1}
      >
        <CaretLeft size={18} />
      </button>

      {pages.map((page, key) => (
        <button
          key={key}
          className={`h-8 w-8 flex items-center justify-center rounded ${
            currentPage === page ? 'bg-orange-400' : 'bg-orange-100 hover:bg-orange-400'
          }`}
          onClick={() => handlePageClick(page)}
        >
          <span className={`font-semibold text-sm ${currentPage === page ? 'text-white' : ''}`}>
            {page}
          </span>
        </button>
      ))}

      <button
        className="h-8 w-8 flex items-center justify-center rounded bg-orange-100 hover:bg-orange-400"
        onClick={handleNextPage}
        disabled={currentPage === pages.length}
      >
        <CaretRight size={18} />
      </button>
    </div>
  );
};

export default Pagination;
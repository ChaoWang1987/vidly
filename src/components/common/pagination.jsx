import React from "react";
import _ from "lodash";
import PropTypes from "prop-types";

// totalCount
// pageSize
// onPageChange
const Pagination = props => {
  const { totalCount, pageSize, currentPage, onPageChange } = props;

  const pageNumber = Math.ceil(totalCount / pageSize);

  if (pageNumber === 1) {
    return null;
  }

  const pages = _.range(1, pageNumber + 1);

  return (
    <ul className="pagination">
      {pages.map(page => (
        <li
          key={page}
          className={currentPage === page ? "page-item active" : "page-item"}
        >
          <button onClick={() => onPageChange(page)} className="page-link">
            {page}
          </button>
        </li>
      ))}
    </ul>
  );
};
Pagination.propTypes = {
  totalCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired
};

export default Pagination;

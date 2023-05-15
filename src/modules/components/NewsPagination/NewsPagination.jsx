/* eslint-disable no-unused-vars */
import { useRef } from "react";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import "./NewsPagination.css";

export default function NewsPagination({
  postPerPage,
  totalPost,
  currentPage,
  previousPage,
  nextPage,
}) {
  const inputRef = useRef();
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalPost / postPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="row justify-content-center g-3 mb-3 py-3">
      <div className="col-lg-6 col-md-6">
        <div className="pagination_items_container">
          <Button
            type="button"
            ref={() => inputRef.current}
            disabled={currentPage <= 1}
            onClick={previousPage}
            className="pagination-items border-0 d-block w-100"
            style={{ backgroundColor: "#1e1e1e" }}
          >
            <div className="pagination-items__action-name text-white text-start">
              <div>Sebelumnya</div>
              <div>Previous page</div>
            </div>
          </Button>
        </div>
      </div>
      <div className="col-lg-6 col-md-6">
        <div className="pagination_items_container">
          <Button
            type="button"
            ref={() => inputRef.current}
            disabled={currentPage >= totalPost / postPerPage}
            onClick={nextPage}
            className="pagination-items border-0 d-block w-100"
            style={{ backgroundColor: "#1e1e1e" }}
          >
            <div className="pagination-items__action-name text-white text-start">
              <div>Selanjutnya</div>
              <div>Next page</div>
            </div>
          </Button>
        </div>
      </div>
    </div>
  );
}

NewsPagination.propTypes = {
  postPerPage: PropTypes.number,
  totalPost: PropTypes.number,
  currentPage: PropTypes.number,
  previousPage: PropTypes.func,
  nextPage: PropTypes.func,
};

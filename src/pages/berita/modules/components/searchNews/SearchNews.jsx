/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useRef } from "react";
import { Form } from "react-bootstrap";
import "../../styles/search.css";

export default function SearchNews({
  items,
  searchQuery,
  setSearchQuery,
  setSearchResult,
}) {
  const ref = useRef();
  const filteredSearchQuery = items?.filter(
    (filteredData) =>
      filteredData?.title
        .toLowerCase()
        .includes(searchQuery.get("search")?.toLowerCase()) ||
      filteredData?.contentSnippet
        .toLowerCase()
        .includes(searchQuery.get("search")?.toLowerCase())
  );

  React.useMemo(() => {
    setTimeout(() => {
      setSearchResult(filteredSearchQuery);
    }, 500);
  });

  return (
    <div className="row justify-content-end g-2 py-3">
      <div className="col-lg-4">
        <div className="ib-search-items" style={{ position: "relative" }}>
          <Form
            onSubmit={(e) => e.preventDefault()}
            className="ib-search-items__forms"
          >
            <Form.Control
              ref={ref}
              onChange={(e) => setSearchQuery({ search: e.target.value })}
              value={searchQuery.get("search") ? searchQuery.get("search") : ""}
              type="search"
              disabled={!items}
              placeholder="Cari..."
              aria-label="Cari"
            />
          </Form>
        </div>
      </div>
    </div>
  );
}

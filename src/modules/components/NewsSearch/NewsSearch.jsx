/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useRef, useMemo } from "react";
import NewsSearchItems from "./NewsSearchItems";
import "./NewsSearch.css";

export default function NewsSearch({
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

  useMemo(() => {
    setTimeout(() => {
      setSearchResult(filteredSearchQuery);
    }, 500);
  });

  return (
    <div className="row justify-content-end g-2 py-3">
      <div className="col-lg-4">
        <NewsSearchItems
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          items={items}
        />
      </div>
    </div>
  );
}

/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Fragment, useState } from "react";
import { format, parseISO } from "date-fns";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import loadable from "@loadable/component";

const NewsPagination = loadable(() =>
  import("../NewsPagination/NewsPagination")
);
const NewsCardItems = loadable(() => import("../NewsCardItems/NewsCardItems"));
const NewsCardHeadingTitle = loadable(() =>
  import("../NewsHeading/NewsHeadingTitle")
);
const NewsHeading = loadable(() => import("../NewsHeading/NewsHeading"));

export default function NewsSearchResults({
  items,
  searchResult,
  searchQuery,
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerpage, setPostPerpage] = useState(12);

  const indexOfLastPost = currentPage * postsPerpage;
  const indexOfFirstPost = indexOfLastPost - postsPerpage;
  const results = searchResult?.slice(indexOfFirstPost, indexOfLastPost);

  const onPreviousPageChangeHandler = (e) => {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };

  const onNextPageChangeHandler = (e) => {
    if (currentPage !== Math.ceil(items?.length / postsPerpage)) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  };
  return (
    <div
      className="row justify-content-arround g-3 py-3"
      style={{ position: "relative" }}
    >
      <div className="ib-search-results">
        <NewsHeading>
          <div className="ib-search-results__title">
            <h1 className="text-white text-capitalize">
              {searchResult.length} Hasil Pencarian{" "}
              {`"${searchQuery.get("search")}"`}
            </h1>
          </div>
        </NewsHeading>
        <div
          className="ib-search-results__items"
          style={{ position: "relative" }}
        >
          <div className="ib-search-results__items-empty">
            <div className="row justify-content-arround g-3 py-3">
              {results?.map((item, index) => (
                <NewsCardItems key={index} items={item} />
              ))}
              {searchResult?.length >= 12 && (
                <NewsPagination
                  totalPost={searchResult?.length}
                  postPerPage={postsPerpage}
                  currentPage={currentPage}
                  nextPage={onNextPageChangeHandler}
                  previousPage={onPreviousPageChangeHandler}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

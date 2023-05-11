/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Fragment, useState } from "react";
import CardItems from "../cardItems/CardItems";
import PaginationNews from "../paginationNews/PaginationNews";
import { CardHeading, CardHeadingTitle } from "../../Loadable";
import { format, parseISO } from "date-fns";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

export default function SearchNewsResults({
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
        <CardHeading>
          <div className="ib-search-results__title">
            <h1 className="text-white text-capitalize">
              {searchResult.length} Hasil Pencarian{" "}
              {`"${searchQuery.get("search")}"`}
            </h1>
          </div>
        </CardHeading>
        <div
          className="ib-search-results__items"
          style={{ position: "relative" }}
        >
          {searchResult.length ? (
            <div className="ib-search-results__items-empty">
              <div className="row justify-content-arround g-3 py-3">
                {results?.map((item, index) => (
                  <CardItems key={index} items={item} />
                ))}
                {searchResult?.length >= 12 && (
                  <PaginationNews
                    totalPost={searchResult?.length}
                    postPerPage={postsPerpage}
                    currentPage={currentPage}
                    nextPage={onNextPageChangeHandler}
                    previousPage={onPreviousPageChangeHandler}
                  />
                )}
              </div>
            </div>
          ) : (
            <div className="ib-search-results__items-is-empty py-3">
              <CardHeading>
                <CardHeadingTitle title="Berita Lainnya" />
                <div className="row justify-content-start flex-column  g-3 py-3 ">
                  <Fragment>
                    {items
                      ?.sort()
                      .reverse()
                      .slice(0, 12)
                      .map((item, index) => (
                        <Link
                          key={index}
                          to={item.link}
                          className="btn btn-link text-white text-decoration-none m-0 p-0"
                        >
                          <Card
                            className="news-card-items__recomended"
                            style={{
                              width: "100%",
                            }}
                          >
                            <Card.Body>
                              <Card.Title className="text-white text-capitalize text-left                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     w">
                                {item.title}
                              </Card.Title>
                              <Card.Subtitle className="mb-2 text-muted">
                                {item.isoDate &&
                                  `${format(
                                    parseISO(item.isoDate),
                                    "h"
                                  )} Jam yang lalu`}
                              </Card.Subtitle>
                              <Card.Text
                                style={{
                                  fontSize: "18px",
                                  fontWeight: "400",
                                }}
                              >
                                {item.contentSnippet.length >= 250
                                  ? `${item.contentSnippet.substring(
                                      0,
                                      250
                                    )}...`
                                  : item.contentSnippet}
                              </Card.Text>
                              <Card.Link
                                href={item.link}
                                target="_parent"
                                aria-label="Baca Selengkapnya"
                                className="text-white text-decoration-none"
                              >
                                Baca Selengkapnya
                              </Card.Link>
                              <hr />
                            </Card.Body>
                          </Card>
                        </Link>
                      ))}
                  </Fragment>
                </div>
              </CardHeading>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

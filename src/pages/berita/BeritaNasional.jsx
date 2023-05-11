/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, Fragment } from "react";
import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useGetNasionalNews } from "../../hooks/useNewsCnnHooks";
import {
  SkeletonNewsCardItems,
  CardItems,
  CardHeading,
  CardHeadingTitle,
  CardHeadingBreadcrumb,
  SearchNews,
  SearchNewsResults,
  PaginationNews,
} from "./modules/Loadable";

export const RenderedData = ({
  isLoading,
  isSuccess,
  isError,
  Error,
  items,
  searchQuery,
  setSearchQuery,
  setSearchResult,
  searchResult,
  postsPerpage,
  currentPage,
  setCurrentPage,
}) => {
  const indexOfLastPost = currentPage * postsPerpage;
  const indexOfFirstPost = indexOfLastPost - postsPerpage;
  const results = items?.slice(indexOfFirstPost, indexOfLastPost);

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
    <>
      <CardHeading>
        <div className="d-flex justify-content-between g-2 flex-wrap">
          <CardHeadingTitle title="Berita Nasional" />
          <CardHeadingBreadcrumb linkName="Berita Nasional" />
        </div>
        <p>Berita terkini dari isu dalam negeri yang sedang berlangsung</p>
      </CardHeading>
      <SearchNews
        items={items}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setSearchResult={setSearchResult}
      />
      {isLoading && !isSuccess && <SkeletonNewsCardItems count={12} />}
      {!isLoading && isSuccess && (
        <Fragment>
          {!searchQuery.get("search") ? (
            <Fragment>
              <div className="row justify-content-arround g-3 py-3">
                {results?.map((item, index) => (
                  <CardItems key={index} items={item} />
                ))}
              </div>
              {items?.length >= 12 && (
                <PaginationNews
                  totalPost={items?.length}
                  postPerPage={postsPerpage}
                  currentPage={currentPage}
                  nextPage={onNextPageChangeHandler}
                  previousPage={onPreviousPageChangeHandler}
                />
              )}
            </Fragment>
          ) : (
            <div className="row justify-content-arround g-3 py-3">
              <SearchNewsResults
                items={items}
                searchQuery={searchQuery}
                searchResult={searchResult}
              />
            </div>
          )}
        </Fragment>
      )}
    </>
  );
};

export default function BeritaNasional() {
  const [currentPage, setCurrentPage] = useState(1);
  const {
    data: items,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetNasionalNews(currentPage);

  // Set title
  let pageTitle =
    "Berita terkini dari isu dalam negeri yang sedang berlangsung";

  // Search & Set title
  const [searchQuery, setSearchQuery] = useSearchParams();
  const [searchResult, setSearchResult] = useState([]);

  if (searchQuery.get("search")) {
    if (searchResult?.length) {
      pageTitle = `${searchResult?.length} Hasil pencarian ${searchQuery.get(
        "search"
      )}`;
      document.title = pageTitle;
    } else {
      pageTitle = `Pencarian tidak ditemukan`;
      document.title = pageTitle;
    }
  }

  // Pagination
  const [postsPerpage, setPostPerpage] = useState(12);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>{pageTitle}</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="type" property="og:type" content="article" />
        <meta
          name="title"
          property="og:title"
          content="Berita peristiwa terbaru di Indonesia dan luar negeri sedang berlangsung"
        />
        <meta
          name="description"
          property="og:description"
          content="Berita peristiwa terbaru di Indonesia dan luar negeri sedang berlangsung"
        />
      </Helmet>
      <RenderedData
        isLoading={isLoading}
        isError={isError}
        isSuccess={isSuccess}
        items={items}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setSearchResult={setSearchResult}
        searchResult={searchResult}
        currentPage={currentPage}
        postsPerpage={postsPerpage}
        setCurrentPage={setCurrentPage}
      />
    </>
  );
}
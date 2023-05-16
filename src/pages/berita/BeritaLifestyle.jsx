/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { useState, Fragment } from "react";
import { useSearchParams } from "react-router-dom";
import { Helmet } from "react-helmet";
import { useGetLifestyleNews } from "../../hooks/NewsCnbcHook";
import {
  NewsHeading,
  NewsCardHeadingTitle,
  NewsSearch,
  NewsSearchResults,
  NewsCardItems,
  NewsPagination,
  NewsSkeletonCardItems,
  NewsRecomended,
} from "../../modules/app.module";

export const RenderedData = ({
  fetchStatus,
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
      <NewsHeading>
        <NewsCardHeadingTitle title="Berita Lifestyle" />
        <p>
          Berita terkini dari isu lifestyle dari indonesia dan luar negeri yang
          sedang berlangsung
        </p>
      </NewsHeading>
      <NewsSearch
        items={items}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        setSearchResult={setSearchResult}
      />
      {fetchStatus !== "fetching" && fetchStatus === "paused" && (
        <NewsSkeletonCardItems count={12} />
      )}
      {fetchStatus === "fetching" && <NewsSkeletonCardItems count={12} />}
      {fetchStatus !== "fetching" && fetchStatus === "idle" && (
        <Fragment>
          {!searchQuery.get("search") ? (
            <Fragment>
              <div className="row justify-content-arround g-3 py-3">
                {results?.map((item, index) => (
                  <NewsCardItems key={index} items={item} />
                ))}
              </div>
              {items?.length >= 12 && (
                <NewsPagination
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
              <NewsSearchResults
                items={items}
                searchQuery={searchQuery}
                searchResult={searchResult}
              />
            </div>
          )}

          <div className="py-3">
            <NewsRecomended title="Baca Berita Lainnya" />
          </div>
        </Fragment>
      )}
    </>
  );
};

export default function BeritaLifestyle() {
  const [currentPage, setCurrentPage] = useState(1);
  const {
    data: items,
    error,
    fetchStatus,
    status,
  } = useGetLifestyleNews(currentPage);

  // Set title
  let pageTitle =
    "Berita terkini dari isu lifestyle dari indonesia dan luar negeri yang sedang berlangsung";

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
          content="Berita terkini dari isu lifestyle dari indonesia dan luar negeri yang sedang berlangsung"
        />
        <meta
          name="description"
          property="og:description"
          content="Berita terkini dari isu lifestyle dari indonesia dan luar negeri yang sedang berlangsung"
        />
      </Helmet>
      {status === "error" ? (
        <div>{error.message}</div>
      ) : (
        <RenderedData
          fetchStatus={fetchStatus}
          items={items}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          setSearchResult={setSearchResult}
          searchResult={searchResult}
          currentPage={currentPage}
          postsPerpage={postsPerpage}
          setCurrentPage={setCurrentPage}
        />
      )}
    </>
  );
}

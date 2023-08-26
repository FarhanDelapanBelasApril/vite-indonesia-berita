/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Link } from "react-router-dom";
import { Fragment, useState } from "react";
import NewssHeadingTitle from "../NewsHeading/NewsHeadingTitle";
import NewsSkeletonCardItems from "../NewsSkeleton/NewsSkeletonCardItems";
import NewsCardItems from "../NewsCardItems/NewsCardItems";

export default function NewsFeatureItems({ title, link, dataFetching }) {
  const [currentPage, setCurrentPage] = useState(1);
  const { data: items, isLoading, isSuccess } = dataFetching(currentPage);

  const handleScrollTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="py-5">
      <div className="d-flex justify-content-between  flex-wrap g-2">
        <NewssHeadingTitle title={title} />
        <Link
          to={link}
          aria-label="Baca Selengkapnya"
          onClick={handleScrollTop}
          className="btn btn-link text-white text-decoration-none p-0"
        >
          Selengkapnya
        </Link>
      </div>
      <hr />
      <div className="row justify-content-arround g-3">
        {isLoading && !isSuccess && <NewsSkeletonCardItems count={3} />}
        {!isLoading && !items && <NewsSkeletonCardItems count={3} />}
        {!isLoading && isSuccess && (
          <Fragment>
            {items
              ?.sort()
              .reverse()
              .slice(0, 3)
              .map((item, index) => (
                <NewsCardItems key={index} items={item} />
              ))}
          </Fragment>
        )}
      </div>
    </div>
  );
}

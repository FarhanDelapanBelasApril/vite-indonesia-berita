import {
  SkeletonNewsCardItems,
  CardItems,
  CardHeading,
  CardHeadingTitle,
} from "./../../../../berita/modules/Loadable";
import { useGetInternasionalNews } from "../../../../../hooks/useNewsCnnHooks";
import { Link } from "react-router-dom";
import { Fragment } from "react";

export const InternasionalNewsFeatured = () => {
  const { data: items, isLoading, isSuccess } = useGetInternasionalNews(1);
  const handleScrollTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <CardHeading>
        <div className="d-flex justify-content-between flex-wrap g-2">
          <CardHeadingTitle title="Berita Internasional" />
          <Link
            to="/berita/internasional"
            aria-label="Baca Selengkapnya"
            onClick={handleScrollTop}
            className="btn btn-link text-white text-decoration-none p-0"
          >
            Selengkapnya
          </Link>
        </div>
        <div className="row justify-content-arround g-3 py-3">
          {isLoading && !isSuccess && <SkeletonNewsCardItems count={3} />}
          {!isLoading && isSuccess && (
            <Fragment>
              {items
                ?.sort()
                .reverse()
                .slice(0, 3)
                .map((item, index) => (
                  <CardItems key={index} items={item} />
                ))}
            </Fragment>
          )}
        </div>
      </CardHeading>
    </div>
  );
};

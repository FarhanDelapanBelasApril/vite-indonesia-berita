import {
  SkeletonNewsCardItems,
  CardItems,
  CardHeading,
  CardHeadingTitle,
} from "./../../../../berita/modules/Loadable";
import { useGetNasionalNews } from "../../../../../hooks/useNewsCnnHooks";
import { Link } from "react-router-dom";
import { Fragment } from "react";

export default function NasionalNewsFeatured() {
  const { data: items, isLoading, isSuccess } = useGetNasionalNews(1);
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
          <CardHeadingTitle title="Berita Dalam Negeri" />
          <Link
            to="/berita/nasional"
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
}

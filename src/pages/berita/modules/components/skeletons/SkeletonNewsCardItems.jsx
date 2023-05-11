/* eslint-disable react/prop-types */
import Skeleton from "./Skeleton";

export default function SkeletonNewsCardItems({ count }) {
  return (
    <div className="row justify-content-arround g-3 pt-3 mb-5">
      {[...Array(count).keys()].map((i) => (
        <div key={i} className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
          <Skeleton />
        </div>
      ))}
    </div>
  );
}

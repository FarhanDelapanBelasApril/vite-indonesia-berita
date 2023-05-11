/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import { Link } from "react-router-dom";

export default function CardItemsTitle({ title, links }) {
  return (
    <div className="ib-card-items__title">
      <Link
        to={links}
        target="_parent"
        rel="noopener"
        aria-label={title}
        className="btn btn-link p-0 text-white text-decoration-none"
      >
        <h2 className="text-capitalize">
          {title.length >= 50 ? `${title.substring(0, 150)}...` : title}
        </h2>
      </Link>
    </div>
  );
}

/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function CardHeadingBreadcrumb({ linkName }) {
  return (
    <div className="ib-card-heading__breadcrumb">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb py-2">
          <li className="breadcrumb-item">
            <Link aria-label="Home" to="/">
              Home
            </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {linkName}
          </li>
        </ol>
      </nav>
    </div>
  );
}

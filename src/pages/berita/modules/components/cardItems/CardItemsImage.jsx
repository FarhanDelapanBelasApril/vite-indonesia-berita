/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function CardItemsImage({ image, alt, link }) {
  return (
    <div className="ib-card-items__links">
      <Link
        to={link}
        target="_parent"
        rel="noopener"
        aria-label="Baca Selengkapnya"
      >
        <div className="ib-card-items__image">
          <img src={image} className="img-fluid rounded w-100" alt={alt} />
        </div>
      </Link>
    </div>
  );
}

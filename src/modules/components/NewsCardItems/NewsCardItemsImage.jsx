/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
import placeholder from "../../../assets/img/placeholder.png";

export default function NewsCardItemsImage({ image, alt, link }) {
  return (
    <div className="ib-card-items__links">
      <Link
        to={link}
        target="_parent"
        rel="noopener"
        aria-label="Baca Selengkapnya"
      >
        <div className="ib-card-items__image">
          <LazyLoadImage
            src={image}
            alt={alt}
            effect="opacity"
            className="img-fluid rounded w-100"
            placeholderSrc={placeholder}
          />
          {/* <img src={image} className="img-fluid rounded w-100" alt={alt} /> */}
        </div>
      </Link>
    </div>
  );
}

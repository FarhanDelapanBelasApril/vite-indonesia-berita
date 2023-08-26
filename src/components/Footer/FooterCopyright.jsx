/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

export default function FooterCopyright({ datetime }) {
  return (
    <div className="IDN-footer__copy">
      {datetime}
      <Link
        className="text-white"
        to="https://www.linkedin.com/in/farhan-20241221a/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Author Farhan"
      >
        <em className="text-decoration-underline">created By Farhan</em>
      </Link>
    </div>
  );
}

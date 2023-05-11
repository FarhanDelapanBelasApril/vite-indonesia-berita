/* eslint-disable no-unused-vars */
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function HeaderNav() {
  const handleScrollTop = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      fixed="top"
      style={{ backgroundColor: "#1e1e1e" }}
    >
      <Container className="bd-gutter flex-wrap flex-lg-nowrap">
        <Link to="/" className="navbar-brand" onClick={handleScrollTop}>
          INDONESIA BERITA
        </Link>
        <button
          className="navbar-toggler border-0 outline-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#responsive-navbar-nav"
          aria-controls="responsive-navbar-nav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="#fff"
            className="bi bi-list"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
        </button>

        <Navbar.Collapse
          id="responsive-navbar-nav"
          className="justify-content-between"
        >
          {/* <Nav className="ms-auto">
            {routes.map(({ name, path }) => {
              return (
                <Link
                  key={path}
                  to={path}
                  onClick={handleScrollTop}
                  className="nav-link mx-md-2 "
                >
                  {name}
                </Link>
              );
            })}
          </Nav> */}
          <Nav className="me-auto">
            <Link
              onClick={handleScrollTop}
              to="/berita"
              className="nav-link mx-md-2"
            >
              Berita
            </Link>
            <Link
              onClick={handleScrollTop}
              to="/berita/terbaru"
              className="nav-link mx-md-2"
            >
              Terbaru
            </Link>
            <Link
              onClick={handleScrollTop}
              to="/berita/internasional"
              className="nav-link mx-md-2"
            >
              Internasional
            </Link>
            <Link
              onClick={handleScrollTop}
              to="/berita/nasional"
              className="nav-link mx-md-2"
            >
              Nasional
            </Link>
            <Link
              onClick={handleScrollTop}
              to="/berita/teknologi"
              className="nav-link mx-md-2"
            >
              Teknologi
            </Link>
            <Link
              onClick={handleScrollTop}
              to="/berita/lifestyle"
              className="nav-link mx-md-2"
            >
              Lifestyle
            </Link>
            <Link
              onClick={handleScrollTop}
              to="/berita/olahraga"
              className="nav-link mx-md-2"
            >
              Olahraga
            </Link>
            <Link
              onClick={handleScrollTop}
              to="/berita/ekonomi"
              className="nav-link mx-md-2"
            >
              Ekonomi
            </Link>
            <Link
              onClick={handleScrollTop}
              to="/berita/entrepreneur"
              className="nav-link mx-md-2"
            >
              Entrepreneur
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

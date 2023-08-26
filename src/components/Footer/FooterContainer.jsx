/* eslint-disable react/prop-types */
export default function FooterContainer({ children }) {
  return (
    <>
      <footer className="position-relative IDN-footer__section">
        <div className="container">
          <div className="d-flex flex-column flex-wrap g-2 pt-3">
            {children}
          </div>
        </div>
      </footer>
    </>
  );
}

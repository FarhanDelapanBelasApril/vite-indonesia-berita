/* eslint-disable react/prop-types */
import { Container } from "react-bootstrap";

export default function AppLayout({ children }) {
  return (
    <Container>
      <div
        className="d-flex flex-column w-100 py-5 pt-5 mt-5"
        style={{ position: "relative" }}
      >
        {children}
      </div>
    </Container>
  );
}

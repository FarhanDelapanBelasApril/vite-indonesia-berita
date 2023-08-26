import { Card, Placeholder } from "react-bootstrap";
import placeholder from "../../../assets/img/placeholder.png";
import "./NewsSkeleton.css";

/* eslint-disable react/react-in-jsx-scope */
export default function NewsSkeleton() {
  return (
    <div className="ib-skeleton-card">
      <div className="ib-skeleton-card__image">
        <img className="img-fluid" src={placeholder} alt="Placeholder image" />
      </div>

      <div className="ib-skeleton-card__body" style={{ position: "relative" }}>
        <Placeholder as={Card.Title} animation="glow">
          <Placeholder xs={6} />
        </Placeholder>
        <Placeholder as={Card.Text} animation="glow">
          <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{" "}
          <Placeholder xs={6} /> <Placeholder xs={8} />
        </Placeholder>
      </div>
    </div>
  );
}

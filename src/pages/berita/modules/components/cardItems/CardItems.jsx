/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import "../../styles/cardItems.css";
import { Col } from "react-bootstrap";
import {
  CardItemsTitle,
  CardItemsDescription,
  CardItemsImage,
} from "../../../../../modules/loadableComponent";

export default function CardItems({ items }) {
  return (
    <Col xl={4} lg={4} md={6} sm={12}>
      <div className="ib-card-items d-flex flex-column">
        <CardItemsImage
          image={items.image.large}
          alt={items.title}
          link={items.link}
        />
        <CardItemsTitle title={items.title} links={items.link} />
        <CardItemsDescription description={items.contentSnippet} />
      </div>
    </Col>
  );
}

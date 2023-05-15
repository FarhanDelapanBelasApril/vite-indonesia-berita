/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import loadable from "@loadable/component";
import { Col } from "react-bootstrap";
import "./NewsCardItems.css";

const NewsCardItemsTitle = loadable(() => import("./NewsCardItemsTitle"));
const NewsCardItemsDescription = loadable(() =>
  import("./NewsCardItemsDescription")
);
const NewsCardItemsImage = loadable(() => import("./NewsCardItemsImage"));

export default function NewsCardItems({ items }) {
  return (
    <Col xl={4} lg={4} md={6} sm={12}>
      <div className="ib-card-items d-flex flex-column">
        <NewsCardItemsImage
          image={items.image.large}
          alt={items.title}
          link={items.link}
        />
        <NewsCardItemsTitle title={items.title} links={items.link} />
        <NewsCardItemsDescription description={items.contentSnippet} />
      </div>
    </Col>
  );
}

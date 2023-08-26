/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { Card } from "react-bootstrap";
import { format } from "date-fns";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./NewsKategoriCardItems.css";

export default function NewsKategoriCardItems({
  dataFetching,
  title,
  desc,
  link,
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const { dataUpdatedAt } = dataFetching(currentPage);

  const lastUpdate = format(new Date(dataUpdatedAt), "dd MMMM YYY");

  return (
    <div className="col-lg-4 col-md-6 col-sm-12">
      <Card className="id-card-category">
        <Card.Body>
          <div className="id-card-category__title pt-3">
            <Card.Title>{title}</Card.Title>
          </div>
          <div className="id-card-category__subtitle mb-3">
            <Card.Subtitle className="mb-2 text-muted">
              Terakhir diperbarui {lastUpdate}
            </Card.Subtitle>
          </div>
          <div className="id-card-category__desc mb-3">
            <Card.Text>{desc}</Card.Text>
          </div>
          <div className="id-card-category__link pt-3 mb-3">
            <Link
              to={link}
              className="btn btn-primary btn-md rounded-pill btn-md"
            >
              Baca Selengkapnya
            </Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

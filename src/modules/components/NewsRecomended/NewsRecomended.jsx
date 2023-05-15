/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import { Fragment, useState } from "react";
import { format, parseISO } from "date-fns";
import { useGetAllNews } from "../../../hooks/useNewsCnnHooks";
import loadable from "@loadable/component";
import "./NewsRecomended.css";

const NewsHeading = loadable(() => import("../NewsHeading/NewsHeading"));
const NewsHeadingTitle = loadable(() =>
  import("../NewsHeading/NewsHeadingTitle")
);

export default function NewsRecomended({ title }) {
  const [currentPage, setCurrentPage] = useState(1);
  const { data: items, isLoading, isSuccess } = useGetAllNews(currentPage);

  return (
    <div>
      <NewsHeading>
        <NewsHeadingTitle title={title} />
        <hr />
        <div className="row justify-content-start flex-column  g-3 py-3 ">
          {isLoading && !isSuccess && <div>Sedang memuat...</div>}
          {!isLoading && !items && <div>Sedang memuat...</div>}
          {!isLoading && isSuccess && (
            <Fragment>
              {items
                ?.sort()
                .reverse()
                .slice(0, 5)
                .map((item, index) => (
                  <Link
                    key={index}
                    to={item.link}
                    className="btn btn-link text-white text-decoration-none m-0 p-0"
                  >
                    <Card
                      className="news-card-items__recomended"
                      style={{
                        width: "100%",
                      }}
                    >
                      <Card.Body>
                        <Card.Title className="text-white text-capitalize text-left                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     w">
                          {item.title}
                        </Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">
                          {item.isoDate &&
                            `${format(
                              parseISO(item.isoDate),
                              "h"
                            )} Jam yang lalu`}
                        </Card.Subtitle>
                        <Card.Text
                          style={{ fontSize: "18px", fontWeight: "400" }}
                        >
                          {item.contentSnippet.length >= 250
                            ? `${item.contentSnippet.substring(0, 250)}...`
                            : item.contentSnippet}
                        </Card.Text>
                        <Card.Link
                          href={item.link}
                          target="_parent"
                          aria-label="Baca Selengkapnya"
                          className="text-white text-decoration-none"
                        >
                          Baca Selengkapnya
                        </Card.Link>
                        <hr />
                      </Card.Body>
                    </Card>
                  </Link>
                ))}
            </Fragment>
          )}
        </div>
      </NewsHeading>
    </div>
  );
}

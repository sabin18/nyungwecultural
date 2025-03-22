import Link from "next/link";
import React from "react";
import { Image } from "react-bootstrap";

const SingleTour = ({ tour = {}, userSelect = false }) => {
  const { image, title, meta, rate, superb,id } = tour;

  return (
    <div>
      <div
        style={{ userSelect: userSelect ? "unset" : "none" }}
        className="popular-tours__single"
      >
        <div className="popular-tours__img">
          <Image
            src={require(`@/images/destination/${image}`).default.src}
            alt=""
            style={{
              width: '100%',
              height: '250px',
            }}
          />
          <div className="popular-tours__icon">
            <Link  href={{ pathname: "/tour-details", query: { id:id } }} legacyBehavior>
              <a>
                <i className="fa fa-heart"></i>
              </a>
            </Link>
          </div>
        </div>
        <div className="popular-tours__content">
          <div className="popular-tours__stars">
            <i className="fa fa-star"></i> {superb} Superb
          </div>
          <h3 className="popular-tours__title">
           <Link  href={{ pathname: "/tour-details", query: { id:id } }}>{title}</Link>
          </h3>
          <p className="popular-tours__rate">
            <span>${rate}</span> / Per Person
          </p>
          <ul className="popular-tours__meta list-unstyled">
            {meta.map((item, index) => (
              <li key={index}>
               <Link  href={{ pathname: "/tour-details", query: { id:id } }}>{item}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SingleTour;

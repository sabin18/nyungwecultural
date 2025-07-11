import Link from "next/link";
import React from "react";
import { Col, Image } from "react-bootstrap";

const SingleDestination = ({ destination = {} }) => {
  const { image, title, rate, subTitle, col,id } = destination;

  return (
    <Col xl={col} lg={col}>
      <div className="destinations-one__single">
        <div className="destinations-one__img">
          <Image
            src={require(`@/images/destination/${image}`).default.src}
            alt=""
          />
          <div className="destinations-one__content">
            {subTitle && (
              <p className="destinations-one__sub-title">{subTitle}</p>
            )}
          </div>
          <div className="destinations-one__button">
            <a href="#">Price: {rate} $</a>
          </div>
        </div>
         <h4 className="destinations-one__title" >
              <Link href={{ pathname: "/tour-details", query: { id:id } }} style={{color:"#003554",fontSize: "25px"}}>{title}</Link>
            </h4>
      </div>
    </Col>
  );
};

export default SingleDestination;

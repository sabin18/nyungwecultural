import React from "react";
import { Container, Image } from "react-bootstrap";
import { SwiperSlide } from "swiper/react";
import { useRouter } from 'next/router'
import popularTours from "@/data/popularTours";

const SingleSlide = ({ slide = {} }) => {
  const { bg } = slide;
  const router = useRouter()
  const { id } = router.query
  const tours = popularTours?.find((popular)=>popular?.id==id);

  return (
    <SwiperSlide>
      <div
        className="image-layer"
        // style={{
        //   backgroundImage:`url(${require(`@/images/destination/${tours?.image}`)})`,
        // }}
      >
        {tours?
  <Image
            src={require(`@/images/destination/${tours?.image}`).default?.src}
            alt=""
            style={{
              width: '100%',
              height: '100%',
            }}
          />:""}

      </div>
      <Container>
        <div className="swiper-slide-inner">
          <div className="tour-details-slider_icon">
            <a href="#">
              <i className="fab fa-youtube"></i>
            </a>
            <a href="#">
              <i className="fa fa-heart"></i>
            </a>
          </div>
        </div>
      </Container>
    </SwiperSlide>
  );
};

export default SingleSlide;

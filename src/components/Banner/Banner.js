import React from "react";
import { Carousel } from "react-bootstrap";
import BlueCar from "../../images/banner/blue.jpg";
import RedCar from "../../images/banner/red.jpg";
import DarkBlueCar from "../../images/banner/dark-blue.jpg";

const Banner = () => {
  return (
    <div className="container">
      <Carousel fade>
        <Carousel.Item>
          <img className="d-block w-100" src={DarkBlueCar} alt="First slide" />
          <Carousel.Caption>
            <h3 className="fw-bold">Find What Are You Looking For</h3>
            <p>Over 6,000 Classified Ads Listing!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={RedCar} alt="Second slide" />

          <Carousel.Caption>
            <h3 className="fw-bold">Find What Are You Looking For</h3>
            <p>Over 6,000 Classified Ads Listing!</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={BlueCar} alt="Third slide" />

          <Carousel.Caption>
            <h3 className="fw-bold">Find What Are You Looking For</h3>
            <p>Over 6,000 Classified Ads Listing!</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Banner;

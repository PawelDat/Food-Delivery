import React from "react";
import { Container, Row, Col } from "reactstrap";
import Slider from "../slider/ReviewSlider";
import network from "../../assets/images/icons/network.png";

const Review = () => {
  return (
    <Container>
      <Row>
        <Col lg="6" md="6">
          <div className="testimonial ">
            <h5 className="testimonial__subtitle mb-4">Reviews</h5>
            <h2 className="testimonial__title mb-4">
              From <span> our latest customers</span>
            </h2>
            <Slider />
          </div>
        </Col>

        <Col lg="6" md="6">
          <img src={network} alt="testimonial-img" className="w-100" />
        </Col>
      </Row>
    </Container>
  );
};

export default Review;

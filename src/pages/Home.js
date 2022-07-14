import React from "react";
import Mainview from "../components/Mainview";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import scooterImg from "../assets/images/icons/scooter.png";
const Home = () => {
  return (
    <Mainview title="Home">
      <section>
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="scooter__content">
                <h5 className="mb-3">Easy way to make an order.</h5>
                <h1 className="mb-4 scooter__title">
                  <span>Hungry?</span>Just wait, <span> food at </span> 
                   <span> your </span>door<span> in the</span> blink  <span>of the</span> eye!
                </h1>
                <p>
                  Order the best Food around your area with delivery.
                </p>
                <div className="scooter__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn d-flex align-items-center justify-content-between">
                    Order now! <i class="ri-arrow-right-s-line"></i>
                  </button>
                  <button className="all__foods-btn">
                    <Link to="/foods">See all foods</Link>
                  </button>
                </div>
                <div className="scooter__service d-flex align-tems-center gap-5 mt-5">
                  <p className="d-flex align-items-center gap-2">
                    <span className="shipping__icon">
                      <i class="ri-car-line"></i>
                    </span>
                    NO shipping charge
                  </p>
                  <p className="d-flex align-items-center gap-2">
                    <span className="check__icon">
                      <i class="ri-shield-check-line"></i>
                    </span>
                    100% secure checkout
                  </p>
                </div>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="scooter__img">
                <img
                  src={scooterImg}
                  alt="scooter-img"
                  className="main__picture"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Mainview>
  );
};

export default Home;

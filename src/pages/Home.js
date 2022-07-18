import React from "react";
import { Container, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";
import Mainview from "../components/Mainview";
import Category from "../components/HomePage/Category";
import Delivery from "../components/HomePage/Delivery";
import Aboutus from "../components/HomePage/Aboutus";
import ProductBar from "../components/HomePage/ProductBar";
import HotProducts from "../components/HomePage/HotProducts";
import Review from "../components/HomePage/Review"
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
                  <span>Hungry?</span>Just wait, food at
                  <span> your </span>door<span> in the</span> blink{" "}
                  <span>of the</span> eye!
                </h1>
                <p>Order the best Food around your area with delivery.</p>
                <div className="scooter__btns d-flex align-items-center gap-5 mt-4">
                  <button className="order__btn d-flex align-items-center justify-content-between">
                    Order now! <i className="ri-arrow-right-s-line"></i>
                  </button>
                  <button className="all__foods-btn">
                    <Link to="/foods">See all foods</Link>
                  </button>
                </div>
                <div className="scooter__service d-flex align-tems-center gap-5 mt-5">
                  <p className="d-flex align-items-center gap-2">
                    <span className="shipping__icon">
                      <i className="ri-car-line"></i>
                    </span>
                    NO shipping charge
                  </p>
                  <p className="d-flex align-items-center gap-2">
                    <span className="check__icon">
                      <i className="ri-shield-check-line"></i>
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
      <section>
        <Category />
      </section>
        <Delivery />
      <section>
        <ProductBar />
      </section>
      <section className="about__us">
        <Aboutus />
      </section>
      <section>
        <HotProducts/>
      </section>
      <section>
        <Review />
      </section>
    </Mainview>
  );
};

export default Home;

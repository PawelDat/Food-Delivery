import React from "react";
import Mainview from "../components/Mainview";
import FoodSection from "../components/AllFoods/FoodSection";
import { Container, Row, Col } from "reactstrap";
const Contact = () => {
  return (
    <Mainview title="Contact">
      <FoodSection title="Contact us" />
      <section>
        <Container>
          <Row>
            <Col lg="9" md="6">
              <h6 className="mb-4">Contact us</h6>
              <form className="checkout__form">
                <div className="form__group">
                  <input type="text" placeholder="Enter your name" required />
                </div>

                <div className="form__group">
                  <input type="email" placeholder="Enter your email" required />
                </div>
                <div className="form__group">
                  <input className="form__text" type="text" placeholder="Leave your message" required />
                </div>
                <button type="submit" className="addTOCart__btn">
                <i class="ri-send-plane-line"></i>
                </button>
              </form>
            </Col>
          </Row>
        </Container>
      </section>
    </Mainview>
  );
};

export default Contact;

import React from "react";
import { Container, Row, Col, ListGroupItem, ListGroup } from "reactstrap";
import location from "../../assets/images/icons/location.png";
const Aboutus = () => {
  return (
    <Container>
      <Row>
        <Col lg="6" md="6">
          <img src={location} alt="location" className="w-100" />
        </Col>
        <Col lg="6" md="6">
          <div className="why__food-delivery">
            <h2 className="food__delivery-title mb-4">
              Why <span>Food Delivery?</span>
            </h2>
            <p className="food__delivery-desc">
              We are the best company in terms of quality and speed of order
              fulfillment.
            </p>

            <ListGroup className="mt-4">
              <ListGroupItem className="border-0 ps-0">
                <p className=" choose__us-title  gap-2 ">
                  <i class="ri-checkbox-circle-line"></i> Fresh and tasty foods
                </p>
                <p className="choose__us-desc">
                  We work only with the best restaurants in the area, which
                  brings the right quality.
                </p>
              </ListGroupItem>

              <ListGroupItem className="border-0 ps-0">
                <p className="choose__us-title gap-2 ">
                  <i class="ri-checkbox-circle-line"></i> Quality support
                </p>
                <p className="choose__us-desc">
                  Our selected suppliers approach each order professionally.
                </p>
              </ListGroupItem>

              <ListGroupItem className="border-0 ps-0">
                <p className="choose__us-title  gap-2 ">
                  <i class="ri-checkbox-circle-line"></i>Order from any location{" "}
                </p>
                <p className="choose__us-desc">
                We carry out orders throughout your city.
                </p>
              </ListGroupItem>
            </ListGroup>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Aboutus;

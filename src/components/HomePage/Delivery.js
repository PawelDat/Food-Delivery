import React from 'react'
import { Container, Row, Col } from "reactstrap";
import serviceImg01 from '../../assets/images/icons/service-01.png'
import serviceImg02 from '../../assets/images/icons/service-02.png'
import serviceImg03 from '../../assets/images/icons/service-03.png'

const featureData = [
  {
    title: "Quick Delivery",
    imgUrl: serviceImg01,
    desc: "Our Company employs the best and the quickest suppliers ",
  },

  {
    title: "Special Thermal Packaging",
    imgUrl: serviceImg02,
    desc: "We have developed special packages that ensure that the customer always receives warm food",
  },
  {
    title: "Easy Pick Up",
    imgUrl: serviceImg03,
    desc: "The supplier, after reaching the destination,  will give you food or leave it at your door.",
  },
];

const Deliver = () => {
  return (
    <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h5 className="feature__subtitle mb-4">What we serve</h5>
              <h2 className="feature__title">Just sit back at home</h2>
              <h2 className="feature__title">
                we will <span> take care</span> of your <span> order</span>
              </h2>
              <p className="feautre__text">
                We work with the best restaurants in your area, all you have to
                do is choose the food for yourself and wait for a quick
                delivery.
              </p>
            </Col>
            {featureData.map((item, index) => (
              <Col lg="4" md="6" sm="6" key={index} value={index} className="mt-5">
                <div className="feature__item text-center px-5 py-3">
                  <img
                    src={item.imgUrl}
                    alt="feature-img"
                    className="w-25 mb-3"
                  />
                  <h5 className=" fw-bold mb-3">{item.title}</h5>
                  <p>{item.desc}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
)}

export default Deliver
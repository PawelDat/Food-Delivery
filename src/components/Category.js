import React from "react";
import { Container, Row, Col } from "reactstrap";
import hamburgerIcon from "../assets/images/icons/hamburger.png";
import pizzaIcon from "../assets/images/icons/pizza.png";
import asianIcon from "../assets/images/icons/ramen.png";
import kebabIcon from "../assets/images/icons/kebab.png";
import sushiIcon from "../assets/images/icons/sushi.png";

const categoryData = [
  {
    display: "Burgers",
    imgUrl: hamburgerIcon,
  },
  {
    display: "Pizza",
    imgUrl: pizzaIcon,
  },
  {
    display: "Kebab",
    imgUrl: kebabIcon,
  },
  {
    display: "Asian Food",
    imgUrl: asianIcon,
  },
  {
    display: "Sushi",
    imgUrl: sushiIcon,
  },
];

const Category = () => {
  return (
    <Container>
      <Row >
        {categoryData.map((item, index) => (
          <Col>
            <div className="category__item d-flex align-items-center  justify-content-center gap-5 ">
                <div className="category__column">
                <img className="category__image" src={item.imgUrl} alt="category__item" />
                <h6>{item.display}</h6>
                </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Category;

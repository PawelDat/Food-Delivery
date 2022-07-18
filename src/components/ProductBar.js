import React from "react";
import { Container, Row, Col } from "reactstrap";
import ProductCard from "./ProductCard";
import products from "../assets/images/products/Products"
import productImg1 from "../assets/images/icons/hamburger.png";
import productImg2 from "../assets/images/icons/pizza.png";
import productImg3 from "../assets/images/icons/salad.png";
import productImg4 from "../assets/images/icons/sushi.png";
import productImg5 from "../assets/images/icons/spaghetti.png";

const ProductBar = () => {
  return (
    <Container>
      <Row>
        <Col lg="12" className="text-center">
          <h2>Popular Foods</h2>
        </Col>
        <Col lg="12">
          <div className="food__category d-flex align-items-center justify-content-center gap-5">
            <button className="all__btn foodBtnActive">ALL</button>
            <button className="d-flex align-items-center gap-2">
              <img src={productImg1} alt="Burger" />
              Burger
            </button>
            <button className="d-flex align-items-center gap-2">
              <img src={productImg2} alt="Pizza" />
              Pizza
            </button>
            <button className=" d-flex align-items-center gap-2">
              <img src={productImg5} alt="Pasta" />
              Pasta
            </button>
            <button className="d-flex align-items-center gap-2">
              <img src={productImg3} alt="Salad" />
              Salad
            </button>
            <button className="d-flex align-items-center gap-2">
              <img src={productImg4} alt="Sushi" />
              Sushi
            </button>
            
          </div>
        </Col>
        {products.map((item) => (
          <Col lg="3" md="4" sm="6" xs="6" key={item.id}  className="mt-5">
            <ProductCard item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductBar;

import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "reactstrap";
import products from "../assets/images/products/Products";
import ProductCard from "./ProductCard";

const HotProducts = () => {
  const [hotProduct, setHotProduct] = useState([]);
  const [hotProduct2, setHotProduct2] = useState([]);

  useEffect(() => {
    const filteredProduct = products.filter(
      (item) => item.category === "Pizza"
    );
    const sliceProduct = filteredProduct.slice(0, 2);
    setHotProduct(sliceProduct);
  }, []);

  useEffect(() => {
    const filteredProduct2 = products.filter(
      (item) => item.category === "Sushi"
    );
    const sliceProduct2 = filteredProduct2.slice(2, 4);
    setHotProduct2(sliceProduct2);
  }, []);
  return (
    <Container>
      <Row>
        <Col lg="12" className="text-center mb-5">
          <h2>Hot Products</h2>
        </Col>
        {hotProduct.map((item) => (
          <Col lg="3" md="4" sm="6" xs="6" key={item.id}>
            <ProductCard item={item} />
          </Col>
        ))}
        {hotProduct2.map((item) => (
          <Col lg="3" md="4" sm="6" xs="6" key={item.id}>
            <ProductCard item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default HotProducts;

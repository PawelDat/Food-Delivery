import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import ProductCard from "./ProductCard";
import products from "../../assets/images/products/Products";
import productImg1 from "../../assets/images/icons/hamburger.png";
import productImg2 from "../../assets/images/icons/pizza.png";
import productImg3 from "../../assets/images/icons/salad.png";
import productImg4 from "../../assets/images/icons/sushi.png";
import productImg5 from "../../assets/images/icons/spaghetti.png";

const ProductBar = () => {
  const [category, setCategory] = useState("ALL");
  const [allProducts, setAllProducts] = useState(products);

  useEffect(() => {
    if (category === "ALL") {
      setAllProducts(products);
    }
    if (category === "Burger") {
      const filteredProducts = products.filter(
        item => item.category === "Burger"
      );

      setAllProducts(filteredProducts);
    }
    if (category === "Pizza") {
      const filteredProducts = products.filter(
        item => item.category === "Pizza"
      );
      setAllProducts(filteredProducts);
    }
    if (category === "Pasta") {
      const filteredProducts = products.filter(
        item => item.category === "Pasta"
      );
      setAllProducts(filteredProducts);
    }
    if (category === "Salad") {
      const filteredProducts = products.filter(
        item => item.category === "Salad"
      );
      setAllProducts(filteredProducts);
    }
    if (category === "Sushi") {
      const filteredProducts = products.filter(
        item => item.category === "Sushi"
      );
      setAllProducts(filteredProducts);
    }
  }, [category]);

  return (
    <Container>
      <Row>
        <Col lg="12" className="text-center">
          <h2>Popular Foods</h2>
        </Col>
        <Col className="category__column" lg="12">
          <div className="food__category">
            <button
              className={`all__btn ${ category === 'ALL' ? 'foodBtnActive' : ''}`}
              onClick={() => setCategory("ALL")}
            >
              ALL
            </button>
            <button
              className={`d-flex align-items-center gap-3 ${ category === 'Burger' ? 'foodBtnActive' : ''}   `}
              onClick={() => setCategory("Burger")}
            >
              <img src={productImg1} alt="Burger" />
              Burger
            </button>
            <button
              className={`d-flex align-items-center gap-3 ${ category === 'Pizza' ? 'foodBtnActive' : ''}   `}
              onClick={() => setCategory("Pizza")}
            >
              <img src={productImg2} alt="Pizza" />
              Pizza
            </button>
            <button
              className={`d-flex align-items-center gap-3 ${ category === 'Pasta' ? 'foodBtnActive' : ''}   `}
              onClick={() => setCategory("Pasta")}
            >
              <img src={productImg5} alt="Pasta" />
              Pasta
            </button>
            <button
              className={`d-flex align-items-center gap-3 ${ category === 'Salad' ? 'foodBtnActive' : ''}   `}
              onClick={() => setCategory("Salad")}
            >
              <img src={productImg3} alt="Salad" />
              Salad
            </button>
            <button
              className={`d-flex align-items-center gap-3 ${ category === 'Sushi' ? 'foodBtnActive' : ''}   `}
              onClick={() => setCategory("Sushi")}
            >
              <img src={productImg4} alt="Sushi" />
              Sushi
            </button>
          </div>
        </Col>
        {allProducts.map((item) => (
          <Col lg="3" md="4" sm="6" xs="6" key={item.id} className="mt-5">
            <ProductCard item={item} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default ProductBar;

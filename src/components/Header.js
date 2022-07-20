import React, { useRef } from "react";
import { Container } from "reactstrap";
import { NavLink, Link } from "react-router-dom";
import { useSelector, useDispatch }  from "react-redux";
import Logo from "../assets/images/icons/logo.png";
import {cartUiActions} from "../components/store/CartUi"

const nav__links = [
  {
    display: "Home",
    path: "/home",
  },
  {
    display: "Foods",
    path: "/foods",
  },
  {
    display: "Contact",
    path: "/contact",
  },
  {
    display: "Cart",
    path: "/cart",
  },
];

const Header = () => {
  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");
  const menuRef = useRef(null);
  const dispatch = useDispatch();
  const totalQuantity = useSelector((state) => state.cart.totalQuantity);

  const toggleCart = () => {
    dispatch(cartUiActions.toggle());
  };

  return (
    <header className="header">
      <Container>
        <div className="nav__wraper d-flex align-items-center justify-content-between">
          <div className="logo">
          <Link to={`/home`}>
            <img src={Logo} alt="Food-Delivery-Logo" />
            <h4>Food Delivery</h4></Link>
          </div>
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <div className="menu d-flex align-items-center gap-5">
              {nav__links.map((item, index) => (
                <NavLink
                  className={(navClass) =>
                    navClass.isActive ? "active__menu" : ""
                  }
                  to={item.path}
                  key={index}
                  value={index}
                >
                  {item.display}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="nav__right d-flex align-items-center gap-3">
            <span className="cart__icon" onClick={toggleCart}>
              <i class="ri-shopping-basket-2-line"></i>
              <span className="cart__badge">{totalQuantity}</span>
            </span>
            <span className="user">
              <Link to="/login">
                <i className="ri-user-3-line"></i>
              </Link>
            </span>
            <span className="mobile__menu" onClick={toggleMenu}>
              <i className="ri-menu-line"></i>
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;

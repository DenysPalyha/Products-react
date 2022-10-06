import React from "react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

import PropTypes from "prop-types";

import logo from "../../img/logo/pngwing.png";
import HeaderCart from "../HeaderCart/HeaderCart";
import HeaderFavorites from "../HeaderFavorites/HeaderFavorites";

import styles from "./Header.module.scss";

const Header = () => {
  const countCart = useSelector((store) => store.cart.countCart);
  const countFavorit = useSelector((store) => store.favorites.countFavorit);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div>
            <NavLink className={styles.headerHome} to="/">
              <img className={styles.logoHeader} src={logo} alt="logo_header" />
            </NavLink>
          </div>
          <ul className={styles.list}>
            <li>
              <NavLink to="/favorite" className={styles.listItemsFavorit}>
                <HeaderFavorites countFavorite={countFavorit} />
              </NavLink>
            </li>
            <li>
              <NavLink to="/bascet" className={styles.listItemsCart}>
                <HeaderCart cartCount={countCart} />
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

Header.propTypes = {
  countFavorite: PropTypes.number,
  cartCount: PropTypes.number,
};

Header.defaultProps = {
  countFavorite: 0,
  cartCount: 0,
};

export default Header;

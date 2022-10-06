import { React } from "react";
import { ReactComponent as ShopingCart } from "../../img/icon/shoping-cart.svg";
import PropTypes from "prop-types";

import styles from "./HeaderCart.module.scss";

const HeaderCart = ({ cartCount }) => {
  return (
    <>
      <ShopingCart className={styles.shopingCard} />
      {cartCount !== 0 ? (
        <span className={styles.countFavorite}>{cartCount}</span>
      ) : (
        ""
      )}
    </>
  );
};

HeaderCart.propTypes = {
  cartCount: PropTypes.number.isRequired,
};

export default HeaderCart;

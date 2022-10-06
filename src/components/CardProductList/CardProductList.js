import React from "react";
import PropTypes from "prop-types";

import CardProduct from "../CardProduct/CardProduct";

import styles from "./CardProductList.module.scss";

const CardProductList = ({ product }) => {
  return (
    <div className={styles.container}>
      {product.map(
        ({
          id,
          productName,
          price,
          imageUrl,
          vendorCode,
          color,
          isActiveFavorite,
        }) => (
          <CardProduct
            key={id}
            id={id}
            productName={productName}
            price={price}
            imageUrl={imageUrl}
            vendorCode={vendorCode}
            color={color}
            isActiveFavorite={isActiveFavorite}
          />
        )
      )}
    </div>
  );
};

CardProductList.propTypes = {
  product: PropTypes.array,
};

CardProductList.defaultProps = {
  product: [],
};

export default CardProductList;

import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { ReactComponent as StarIcon } from "../../img/icon/star.svg";
import Button from "../Button/Button";

import {
  setMoadalAddProducts,
  dataProduct,
} from "../../store/modalProducts/actionCreators";
import {
  setFavoriteProductAC,
  countFavoriteProductAC,
} from "../../store/favoriteProduct/actionCreators";
import { setIsFavoriteProductAC } from "../../store/products/actionCreators";
import { findAndSetIsFaforiteInCart } from "../../store/productCart/actionCreators";

import styles from "./CardProduct.module.scss";
import ProductDisplayContext from "../../contexts/productDisplayContext/ProductDisplayContext";

const CardProduct = ({
  id,
  productName,
  isActiveFavorite,
  price,
  imageUrl,
  vendorCode,
  color,
}) => {
  const favorites = useSelector((store) => store.favorites.favorite);

  const { isProductDisplay } = useContext(ProductDisplayContext);

  const dispatch = useDispatch();

  return (
    <>
      {isProductDisplay ? (
        <div className={styles.container} data-testid="card-root">
          <div className={styles.wrapperHeader}>
            <p className={styles.productName}>{productName}</p>
            <Button
              textBtn={
                <StarIcon
                  className={
                    isActiveFavorite ? styles.starIconActive : styles.starIcon
                  }
                />
              }
              hendlerClik={() => {
                dispatch(
                  setFavoriteProductAC({
                    id,
                    productName,
                    price,
                    imageUrl,
                    vendorCode,
                    color,
                    isActiveFavorite,
                  })
                );
                dispatch(setIsFavoriteProductAC({ id, favorites }));
                dispatch(findAndSetIsFaforiteInCart({ id, favorites }));
                dispatch(countFavoriteProductAC());
              }}
            />
          </div>
          <div className={styles.positionImg}>
            <img
              className={styles.imagesCard}
              src={imageUrl}
              alt={productName}
            ></img>
          </div>
          <p className={styles.priceCard}>Price: {price}$</p>
          <p className={styles.codeProduct}>Vendor-code: {vendorCode}</p>
          <div className={styles.textColorProduct}>
            Color:
            <div
              className={styles.colorProduct}
              style={{ backgroundColor: color }}
            ></div>
          </div>
          <div className={styles.positionBtn}>
            <Button
              bgColor="#067305"
              textBtn="Add to cart"
              hendlerClik={() => {
                dispatch(setMoadalAddProducts(true));
                dispatch(
                  dataProduct({
                    id,
                    productName,
                    price,
                    imageUrl,
                    vendorCode,
                    color,
                    isActiveFavorite,
                  })
                );
              }}
            />
          </div>
        </div>
      ) : (
        <div className={styles.containerList} data-testid="card-root-list">
          <div className={styles.positionImg}>
            <img
              className={styles.imagesCardList}
              src={imageUrl}
              alt={productName}
            ></img>
          </div>

          <div className={styles.wrapperTextInfoList}>
            <p className={styles.productNameList}>{productName}</p>
            <p className={styles.priceCardList}>Price: {price}$</p>
            <p className={styles.codeProductList}>Vendor-code: {vendorCode}</p>
            <div className={styles.textColorProductList}>
              Color:
              <div
                className={styles.colorProductList}
                style={{ backgroundColor: color }}
              ></div>
            </div>
          </div>

          <div className={styles.wrapperHeaderList}>
            <Button
              textBtn={
                <StarIcon
                  className={
                    isActiveFavorite ? styles.starIconActive : styles.starIcon
                  }
                />
              }
              hendlerClik={() => {
                dispatch(
                  setFavoriteProductAC({
                    id,
                    productName,
                    price,
                    imageUrl,
                    vendorCode,
                    color,
                    isActiveFavorite,
                  })
                );
                dispatch(setIsFavoriteProductAC({ id, favorites }));
                dispatch(findAndSetIsFaforiteInCart({ id, favorites }));
                dispatch(countFavoriteProductAC());
              }}
            />

            <Button
              bgColor="#067305"
              textBtn="Add to cart"
              hendlerClik={() => {
                dispatch(setMoadalAddProducts(true));
                dispatch(
                  dataProduct({
                    id,
                    productName,
                    price,
                    imageUrl,
                    vendorCode,
                    color,
                    isActiveFavorite,
                  })
                );
              }}
            />
          </div>
        </div>
      )}
    </>
  );
};

CardProduct.propTypes = {
  id: PropTypes.number.isRequired,
  productName: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  imageUrl: PropTypes.string,
  vendorCode: PropTypes.number,
  color: PropTypes.string,
  isActiveFavorite: PropTypes.bool,
  favoriteCardProduct: PropTypes.func,
  addCardInCart: PropTypes.func,
};

CardProduct.defaultProps = {
  imageUrl: "./img/no_icon.png",
  vendorCode: 0,
  color: "#fff",
  favoriteCardProduct: () => {},
  addCardInCart: () => {},
  isActiveFavorite: false,
};

export default CardProduct;

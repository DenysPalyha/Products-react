import React from "react";
import { useDispatch, useSelector } from "react-redux";

import Button from "../Button/Button";
import { ReactComponent as StarIcon } from "../../img/icon/star.svg";

import {
  incrimentCountCartAC,
  decrementCountCartAC,
  cartCountProductAC,
  findAndSetIsFaforiteInCart,
} from "../../store/productCart/actionCreators";
import {
  setMoadalDeleteProductAC,
  dataProductCartAC,
} from "../../store/modalDeletCart/actionCreators";
import {
  setFavoriteProductAC,
  countFavoriteProductAC,
} from "../../store/favoriteProduct/actionCreators";
import { setIsFavoriteProductAC } from "../../store/products/actionCreators";

import styles from "./CartProduct.module.scss";

function CartProduct({
  id,
  productName,
  isActiveFavorite,
  price,
  imageUrl,
  vendorCode,
  color,
  count,
}) {
  const favorites = useSelector((store) => store.favorites.favorite);
  const dispatch = useDispatch();

  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapperHeader}>
          <p className={styles.productName}>{productName}</p>
          <div className={styles.containerBtn}>
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
                dispatch(countFavoriteProductAC());
                dispatch(setIsFavoriteProductAC({ id, favorites }));
                dispatch(findAndSetIsFaforiteInCart({ id, favorites }));
              }}
            />
            <button
              className={styles.btnCloseCard}
              onClick={() => {
                dispatch(
                  dataProductCartAC({
                    id,
                    productName,
                    isActiveFavorite,
                    price,
                    imageUrl,
                    vendorCode,
                    color,
                    count,
                  })
                );
                dispatch(setMoadalDeleteProductAC(true));
              }}
            ></button>
          </div>
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
          <div className={styles.countConteiner}>
            <Button
              textBtn="+"
              bgColor="#138d00"
              hendlerClik={() => {
                dispatch(incrimentCountCartAC(id));
                dispatch(cartCountProductAC());
              }}
            />
            <p className={styles.count}>{count}</p>
            <Button
              textBtn="-"
              bgColor="#000fde"
              hendlerClik={() => {
                dispatch(decrementCountCartAC(id));
                dispatch(cartCountProductAC());
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default CartProduct;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./FavoritePage.module.scss";
import CardProduct from "../../components/CardProduct/CardProduct";
import Modal from "../../components/Modal/Modal";

import { setMoadalAddProducts } from "../../store/modalProducts/actionCreators";
import {
  addProductIncartAC,
  cartCountProductAC,
} from "../../store/productCart/actionCreators";

function FavoritePage() {
  const favorite = useSelector((store) => store.favorites.favorite);
  const isOpenModalAdd = useSelector(
    (store) => store.modalAddProducts.isOpenModalAdd
  );
  const dataProduct = useSelector(
    (store) => store.modalAddProducts.dataProduct
  );

  const dispatch = useDispatch();

  const closeModal = () => dispatch(setMoadalAddProducts(false));

  return (
    <>
      <h2 className={styles.heading}>Your favorite products</h2>

      <ul className={styles.container}>
        {favorite.length !== 0 ? (
          favorite.map(
            ({
              id,
              productName,
              price,
              imageUrl,
              vendorCode,
              color,
              isActiveFavorite,
            }) => {
              return (
                <li key={id}>
                  <CardProduct
                    id={id}
                    productName={productName}
                    price={price}
                    imageUrl={imageUrl}
                    vendorCode={vendorCode}
                    color={color}
                    isActiveFavorite={isActiveFavorite}
                  />
                </li>
              );
            }
          )
        ) : (
          <h2 className={styles.textHeading}>
            There are no favorite product here yet!
          </h2>
        )}
      </ul>

      {isOpenModalAdd && (
        <Modal
          header="Add item to cart"
          closeModale={closeModal}
          text="Do you want to add a product?"
          actions={
            <>
              <button
                className={styles.btnForModal}
                type="button"
                onClick={() => {
                  dispatch(addProductIncartAC(dataProduct));
                  dispatch(cartCountProductAC());
                  closeModal();
                }}
              >
                Add
              </button>
              <button
                className={styles.btnForModal}
                type="button"
                onClick={closeModal}
              >
                Cancel
              </button>
            </>
          }
        />
      )}
    </>
  );
}

export default FavoritePage;

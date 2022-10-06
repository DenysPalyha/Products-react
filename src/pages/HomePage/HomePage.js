import React, { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import Button from "../../components/Button/Button";

import CardProductList from "../../components/CardProductList/CardProductList";
import Modal from "../../components/Modal/Modal";
import ProductDisplayContext from "../../contexts/productDisplayContext/ProductDisplayContext";

import { setMoadalAddProducts } from "../../store/modalProducts/actionCreators";
import {
  addProductIncartAC,
  cartCountProductAC,
} from "../../store/productCart/actionCreators";

import styles from "./HomePage.module.scss";

function HomePage() {
  const products = useSelector((store) => store.products.products);

  const isOpenModalAdd = useSelector(
    (store) => store.modalAddProducts.isOpenModalAdd
  );

  const dataProduct = useSelector(
    (store) => store.modalAddProducts.dataProduct
  );

  const { isProductDisplay, setIsProductDisplay } = useContext(
    ProductDisplayContext
  );

  const dispatch = useDispatch();

  const closeModal = () => dispatch(setMoadalAddProducts(false));

  return (
    <>
      <h2 className={styles.heading}>Products</h2>
      <div className={styles.containerBtn}>
        <Button
          bgColor="#6c7f00"
          textBtn={isProductDisplay ? "lists" : "Cards"}
          hendlerClik={() => {
            setIsProductDisplay((prevDisplay) => !prevDisplay);
          }}
        />
      </div>
      <CardProductList product={products} />

      {isOpenModalAdd && (
        <Modal
          header="Add item to cart"
          closeModale={closeModal}
          text={`Do you want to add a product: ${dataProduct.productName}?`}
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

export default HomePage;

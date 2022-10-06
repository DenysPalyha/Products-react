import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  deleteProductCartAC,
  cartCountProductAC,
} from "../../store/productCart/actionCreators";
import { setMoadalDeleteProductAC } from "../../store/modalDeletCart/actionCreators";

import CartProduct from "../../components/CartProduct/CartProduct";
import Modal from "../../components/Modal/Modal";

import styles from "./BascetPages.module.scss";
import PurchaseForm from "../../components/PurchaseForm/PurchaseForm";
import Button from "../../components/Button/Button";

function BascetPage() {
  const [isFormCartOpen, setIsFormCartOpen] = useState(false);
  const [statusCheckout, setStatusCheckout] = useState(false);

  const cart = useSelector((store) => store.cart.cart);
  const isOpenModalDelete = useSelector(
    (store) => store.deleteCart.isOpenModalDelete
  );
  const dataProductCart = useSelector(
    (store) => store.deleteCart.dataProductCart
  );

  const dispatch = useDispatch();

  const closeDeleteModal = () => {
    dispatch(setMoadalDeleteProductAC(false));
  };

  const hendleIsFormCartOpen = () => {
    setIsFormCartOpen((currentFormOpen) => !currentFormOpen);
  };

  const henrleStatusCheckout = (boll) => {
    setStatusCheckout(boll);
  };

  return (
    <>
      <h2 className={styles.heading}>Product basket</h2>
      <div className={styles.positionBtnCheckout}>
        <Button
          bgColor="rgb(60, 132, 64)"
          textBtn="Сheckout"
          disabledBtn={cart.length === 0 ? true : false}
          hendlerClik={hendleIsFormCartOpen}
        />
      </div>
      {isFormCartOpen && (
        <PurchaseForm
          hendleIsFormCartOpen={hendleIsFormCartOpen}
          henrleStatusCheckout={henrleStatusCheckout}
        />
      )}

      <ul className={styles.container}>
        {cart.length !== 0 ? (
          cart.map(
            ({
              id,
              productName,
              price,
              imageUrl,
              vendorCode,
              color,
              isActiveFavorite,
              count,
            }) => {
              return (
                <li className={styles.listItem} key={id}>
                  <CartProduct
                    id={id}
                    productName={productName}
                    price={price}
                    imageUrl={imageUrl}
                    vendorCode={vendorCode}
                    color={color}
                    isActiveFavorite={isActiveFavorite}
                    count={count}
                  />
                </li>
              );
            }
          )
        ) : (
          <h2 className={styles.textHeading}>Product cart is empty!</h2>
        )}
      </ul>

      {statusCheckout && (
        <div className={styles.wrapperSuccessfully}>
          <p className={styles.successfullyText}>
            Your order has been successfully placed, our operator will contact
            you!
          </p>
        </div>
      )}

      {isOpenModalDelete && (
        <Modal
          header="Delete product"
          text={`Are you sure you want to uninstall this product: ${dataProductCart.productName}?`}
          closeModale={closeDeleteModal}
          actions={
            <>
              <button
                className={styles.btnForModal}
                type="button"
                onClick={() => {
                  dispatch(deleteProductCartAC(dataProductCart));
                  dispatch(cartCountProductAC());
                  closeDeleteModal();
                }}
              >
                Delete
              </button>
              <button
                className={styles.btnForModal}
                type="button"
                onClick={closeDeleteModal}
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

export default BascetPage;

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Formik, Form } from "formik";
import * as yup from "yup";

import CustomInput from "../CustomInput/CustomInput";
import FormatNumberInput from "../FormatNumberInput/FormatNumberInput";

import { emptyShoppingCartAC } from "../../store/productCart/actionCreators";

import styles from "./PurchaseForm.module.scss";

function PurchaseForm({ hendleIsFormCartOpen, henrleStatusCheckout }) {
  const cart = useSelector((store) => store.cart.cart);
  const dispatch = useDispatch();

  const infoProductsInCart = cart.map(
    ({ productName, vendorCode, count, price, color }) => {
      return { productName, vendorCode, count, price, color };
    }
  );

  const hendleSubmitForm = (values, { resetForm, setFieldError }) => {
    const findInvalidPhoneNumber = values.phoneNumber.includes("#");
    if (findInvalidPhoneNumber) {
      setFieldError("phoneNumber", "Invalid number phone");
      return;
    }

    henrleStatusCheckout(true);

    console.log("Product information:", infoProductsInCart);
    console.log("Delivery information:", values);

    dispatch(emptyShoppingCartAC());
    resetForm();
    hendleIsFormCartOpen();

    setTimeout(() => henrleStatusCheckout(false), 5000);
  };

  const initialValues = {
    name: "",
    lastName: "",
    age: "",
    address: "",
    phoneNumber: "",
  };

  const purchaseValidatShema = yup.object().shape({
    name: yup
      .string()
      .min(2, "Minimum number of letters 2")
      .max(15, "maximum number of letters 15")
      .matches(/^[a-zA-Z\s]*$/, "Should contain only characters and space")
      .required("This field is required"),

    lastName: yup
      .string()
      .min(2, "Minimum number of letters 2")
      .max(15, "maximum number of letters 15")
      .matches(/^[a-zA-Z\s]*$/, "Should contain only characters and space")
      .required("This field is required"),

    age: yup
      .number()
      .min(18, "your age must be over 18")
      .max(90, "your age must be no more than 90 years old")
      .required("This field is required"),

    address: yup
      .string()
      .min(2, "Minimum number of letters 2")
      .max(15, "maximum number of letters 15")
      .matches(/[a-zA-Z]/, "Сontains only strings with numbers and spaces")
      .required("This field is required"),

    phoneNumber: yup.string().required("This field is required"),
  });

  return (
    <>
      <div
        className={styles.backgroundForm}
        onClick={hendleIsFormCartOpen}
      ></div>
      <Formik
        initialValues={initialValues}
        validationSchema={purchaseValidatShema}
        onSubmit={hendleSubmitForm}
      >
        <Form className={styles.formPurchase}>
          <CustomInput type="text" placeholder="Your Name" name="name" />
          <CustomInput
            type="text"
            placeholder="Your Lastname"
            name="lastName"
          />
          <CustomInput type="text" placeholder="Your age" name="age" />
          <CustomInput type="text" placeholder="Your address" name="address" />

          <FormatNumberInput name="phoneNumber" />

          <button className={styles.formPurchaseBtn} type="submit">
            Checkout
          </button>
        </Form>
      </Formik>
    </>
  );
}

export default PurchaseForm;

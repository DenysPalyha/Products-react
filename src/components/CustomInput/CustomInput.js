import React from "react";
import { useField } from "formik";

import styles from "./CustomInput.module.scss";

const CustomInput = (props) => {
  const { type, placeholder } = props;
  const [field, meta] = useField(props);

  return (
    <>
      <input
        type={type}
        placeholder={placeholder}
        {...field}
        className={styles.customInput}
      />
      {!!meta.error && meta.touched && (
        <span className={styles.customInputError}>{meta.error}</span>
      )}
    </>
  );
};

export default CustomInput;

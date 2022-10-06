import React from "react";
import { useField } from "formik";
import { PatternFormat } from "react-number-format";
import styles from "./FormatNumberInput.module.scss";

function FormatNumberInput(props) {
  const [field, meta] = useField(props);

  return (
    <>
      <PatternFormat
        format="+38(###)-###-##-##"
        type="tel"
        allowEmptyFormatting
        mask="#"
        {...field}
        className={styles.customInput}
      />

      {!!meta.error && meta.touched && (
        <span className={styles.customInputError}>{meta.error}</span>
      )}
    </>
  );
}

export default FormatNumberInput;

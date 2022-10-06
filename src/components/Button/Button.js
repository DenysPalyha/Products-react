import React from "react";
import styles from "./Button.module.scss";
import PropTypes from "prop-types";

const Button = ({ bgColor, textBtn, hendlerClik, disabledBtn }) => {
  return (
    <button
      type="button"
      style={{ backgroundColor: bgColor }}
      disabled={disabledBtn}
      className={styles.btn}
      onClick={hendlerClik}
    >
      {textBtn}
    </button>
  );
};

Button.propTypes = {
  bgColor: PropTypes.string,
  textBtn: PropTypes.node,
  hendlerClik: PropTypes.func,
  disabledBtn: PropTypes.bool,
};

Button.defaultProps = {
  bgColor: "",
  textBtn: "",
  disabledBtn: false,
  hendlerClikOpenModal: () => {},
};

export default Button;

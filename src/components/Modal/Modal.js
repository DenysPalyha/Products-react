import React from "react";
import PropTypes from "prop-types";
import styles from "./Modal.module.scss";

const Modal = ({ header, text, closeButton, actions, closeModale }) => {
  return (
    <div className={styles.modal} data-testid="modal-root">
      <div className={styles.bgColorModal} onClick={closeModale}></div>
      <div className={styles.container}>
        <div className={styles.headerModal}>
          <h2 className={styles.headerTitle}>{header}</h2>
          {closeButton && (
            <button className={styles.btnClose} onClick={closeModale}></button>
          )}
        </div>
        <div className={styles.modalBody}>{text}</div>
        <div className={styles.footerBtn}>{actions}</div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  header: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  actions: PropTypes.node.isRequired,
  closeModale: PropTypes.func.isRequired,
  closeButton: PropTypes.bool,
};

Modal.defaultProps = {
  closeButton: true,
};

export default Modal;

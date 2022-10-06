import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/Button/Button";
import notFound from "../../img/not-found.jpg";
import styles from "./NotFound.module.scss";

function NotFoundPage() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div className={styles.notFoundContainer}>
      <h2 className={styles.heading}>
        Your page <span className={styles.notFoundPathName}>"{pathname}"</span>{" "}
        not found
      </h2>
      <img className={styles.notFoundImg} src={notFound} alt="not found" />
      <Button
        bgColor="#ffb300"
        textBtn="Go home"
        hendlerClik={() => {
          navigate("/");
        }}
      />
    </div>
  );
}

export default NotFoundPage;

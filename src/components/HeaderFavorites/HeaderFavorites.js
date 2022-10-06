import { React } from "react";
import { ReactComponent as StarIcon } from "../../img/icon/star.svg";
import PropTypes from "prop-types";
import styles from "./HeaderFavorites.module.scss";

const HeaderFavorites = ({ countFavorite }) => {
  return (
    <>
      <StarIcon className={styles.starIcon} />
      {countFavorite !== 0 ? (
        <span className={styles.countFavorite}>{countFavorite}</span>
      ) : (
        ""
      )}
    </>
  );
};

HeaderFavorites.propTypes = {
  countFavorite: PropTypes.number.isRequired,
};

export default HeaderFavorites;

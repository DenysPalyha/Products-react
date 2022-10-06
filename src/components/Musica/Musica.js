import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

import Header from "../Header/Header";
import AppRouter from "../../router/AppRouter";

import { getProductsAC } from "../../store/products/actionCreators";
import { getProductIncartAC } from "../../store/productCart/actionCreators";
import { getFevoriteProducts } from "../../store/favoriteProduct/actionCreators";

const Musica = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductsAC());
    dispatch(getProductIncartAC());
    dispatch(getFevoriteProducts());
  }, [dispatch]);

  return (
    <>
      <Header />
      <AppRouter />
    </>
  );
};

export default Musica;

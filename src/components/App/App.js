import React from "react";
import ProductDisplayContextProvider from "../../contexts/productDisplayContext/ProductDisplayContextProvider";
import Layout from "../Layout/Layout";
import Musica from "../Musica/Musica";

const App = () => {
  return (
    <ProductDisplayContextProvider>
      <Layout>
        <Musica />
      </Layout>
    </ProductDisplayContextProvider>
  );
};

export default App;

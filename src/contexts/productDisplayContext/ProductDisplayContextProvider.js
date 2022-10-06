import { useState } from "react";

import ProductDisplayContext from "./ProductDisplayContext";

function ProductDisplayContextProvider(props) {
  const [isProductDisplay, setIsProductDisplay] = useState(true);
  const { children } = props;

  return (
    <ProductDisplayContext.Provider
      value={{ isProductDisplay, setIsProductDisplay }}
    >
      {children}
    </ProductDisplayContext.Provider>
  );
}

export default ProductDisplayContextProvider;

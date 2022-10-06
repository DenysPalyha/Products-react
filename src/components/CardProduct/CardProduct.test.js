import { render, screen, fireEvent, getByTestId } from "@testing-library/react";
import { Provider, useDispatch } from "react-redux";
import { useContext } from "react";
import { store } from "../../store/index";
import ProductDisplayContextProvider from "../../contexts/productDisplayContext/ProductDisplayContextProvider";

import { setMoadalAddProducts } from "../../store/modalProducts/actionCreators";

import {
  setFavoriteProductAC,
  countFavoriteProductAC,
} from "../../store/favoriteProduct/actionCreators";
import { findAndSetIsFaforiteInCart } from "../../store/productCart/actionCreators";
import ProductDisplayContext from "../../contexts/productDisplayContext/ProductDisplayContext";

import Modal from "../Modal/Modal";
import CardProduct from "./CardProduct";

const Container = () => {
  const dispatch = useDispatch();
  return (
    <>
      <button
        type="button"
        onClick={() => {
          dispatch(setMoadalAddProducts(true));
        }}
      >
        Add to cart
      </button>
      <Modal
        header="modal test"
        text="text test"
        closeButton={true}
        actions={<button>click test</button>}
        closeModale={() => {}}
      />
    </>
  );
};

const MockedProvider = ({ children }) => (
  <ProductDisplayContextProvider>
    <Provider store={store}>
      <Container />
    </Provider>
  </ProductDisplayContextProvider>
);

describe("check the opening of the modal by clicking on the button in the product card", () => {
  test("should open modal window on button click Add to cart", () => {
    render(<MockedProvider />);

    const btn = screen.getByText("Add to cart");
    fireEvent.click(btn);

    expect(screen.getByTestId("modal-root")).toBeInTheDocument();
  });
});

const MockedProviderCardProduct = ({ children }) => (
  <ProductDisplayContextProvider>
    <Provider store={store}>
      <CardProduct id={1} productName="Moto G Stylus 5G" price={739.99} />
    </Provider>
  </ProductDisplayContextProvider>
);

describe("Card Product component", () => {
  test("should do snapshot Card Product component", () => {
    const { asFragment } = render(<MockedProviderCardProduct />);

    expect(asFragment()).toMatchSnapshot();
  });
});

const ContainerBtnFavorite = () => {
  const dispatch = useDispatch();

  return (
    <>
      <button
        type="button"
        onClick={() => {
          dispatch(
            setFavoriteProductAC({
              id: 1,
              productName: "Moto G Stylus 5G",
              isActiveFavorite: false,
              price: 739.99,
              imageUrl: "./img/motorola.jpg",
              vendorCode: 225739,
              color: "#366735",
            })
          );
          dispatch(
            findAndSetIsFaforiteInCart({
              id: 1,
              favorites: [
                {
                  id: 1,
                  productName: "Moto G Stylus 5G",
                  price: 739.99,
                  imageUrl: "./img/motorola.jpg",
                  vendorCode: 225739,
                  color: "#366735",
                },
              ],
            })
          );
          dispatch(countFavoriteProductAC());
        }}
      >
        Add to favorite
      </button>

      <CardProduct
        id={1}
        productName="Moto G Stylus 5G"
        price={739.99}
        isActiveFavorite={true}
        color="#366735"
        imageUrl="./img/motorola.jpg"
        vendorCode={225739}
      />
    </>
  );
};

const ContainerBtnFavoriteDel = () => {
  const dispatch = useDispatch();

  return (
    <>
      <button
        type="button"
        onClick={() => {
          dispatch(
            setFavoriteProductAC({
              id: 1,
              productName: "Moto G Stylus 5G",
              isActiveFavorite: false,
              price: 739.99,
              imageUrl: "./img/motorola.jpg",
              vendorCode: 225739,
              color: "#366735",
            })
          );

          dispatch(
            findAndSetIsFaforiteInCart({
              id: 1,
              favorites: [
                {
                  id: 1,
                  productName: "Moto G Stylus 5G",
                  price: 739.99,
                  imageUrl: "./img/motorola.jpg",
                  vendorCode: 225739,
                  color: "#366735",
                },
              ],
            })
          );
          dispatch(countFavoriteProductAC());
        }}
      >
        Add to favorite
      </button>
    </>
  );
};

const MockedProviderBtnFavorite = ({ children }) => (
  <ProductDisplayContextProvider>
    <Provider store={store}>
      <ContainerBtnFavorite />
    </Provider>
  </ProductDisplayContextProvider>
);

const MockedProviderBtnFavoriteDel = ({ children }) => (
  <ProductDisplayContextProvider>
    <Provider store={store}>
      <ContainerBtnFavoriteDel />
    </Provider>
  </ProductDisplayContextProvider>
);

describe("add and delete favorite card product", () => {
  test("should add and show card product in favorite page", () => {
    render(<MockedProviderBtnFavorite />);

    const btn = screen.getByText("Add to favorite");
    fireEvent.click(btn);

    expect(screen.getByTestId("card-root")).toBeInTheDocument();
  });

  test("should delet card product in favorite page", () => {
    render(<MockedProviderBtnFavoriteDel />);

    const btn = screen.getByText("Add to favorite");
    fireEvent.click(btn);

    expect(screen.queryByTestId("card-root")).not.toBeInTheDocument();
  });
});

const ContainerListLayout = () => {
  const { setIsProductDisplay } = useContext(ProductDisplayContext);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setIsProductDisplay(false);
        }}
      >
        list
      </button>
      <CardProduct id={1} productName="Moto G Stylus 5G" price={739.99} />
    </>
  );
};

const MockedProviderListLayout = ({ children }) => (
  <ProductDisplayContextProvider>
    <Provider store={store}>
      <ContainerListLayout />
    </Provider>
  </ProductDisplayContextProvider>
);

describe("change layout card product", () => {
  test("should change layout card product on list", () => {
    render(<MockedProviderListLayout />);

    const btnList = screen.getByText("list");
    fireEvent.click(btnList);

    expect(screen.getByTestId("card-root-list")).toBeInTheDocument();
  });

  test("should change layout card product on list snapShot", () => {
    const { asFragment } = render(<MockedProviderListLayout />);

    expect(asFragment()).toMatchSnapshot();
  });
});

import { render, fireEvent, screen } from "@testing-library/react";
import { Provider, useDispatch } from "react-redux";

import { store } from "../../store/index";
import ProductDisplayContextProvider from "../../contexts/productDisplayContext/ProductDisplayContextProvider";

import { setMoadalAddProducts } from "../../store/modalProducts/actionCreators";

import Modal from "../../components/Modal/Modal";
import CardProduct from "../../components/CardProduct/CardProduct";
import HomePage from "./HomePage";
import {
  addProductIncartAC,
  cartCountProductAC,
} from "../../store/productCart/actionCreators";

const ComponentOpenAndCloseModal = () => {
  const dispatch = useDispatch();

  return (
    <>
      <button
        type="button"
        onClick={() => {
          dispatch(setMoadalAddProducts(true));
        }}
      >
        Open Modal
      </button>

      <button
        type="button"
        onClick={() => {
          dispatch(
            addProductIncartAC({
              id: 1,
              productName: "Moto G Stylus 5G",
              isActiveFavorite: false,
              price: 739.99,
              imageUrl: "./img/motorola.jpg",
              vendorCode: 225739,
              color: "#366735",
            })
          );
          dispatch(cartCountProductAC());
          dispatch(setMoadalAddProducts(false));
        }}
      >
        Add
      </button>
      <button
        type="button"
        onClick={() => {
          dispatch(setMoadalAddProducts(false));
        }}
      >
        Cancel
      </button>

      <Modal
        header="modal test add card"
        text="text test add card"
        closeButton={true}
        actions={<button></button>}
        closeModale={() => {}}
      />

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

const MockedProviderHomePage = ({ children }) => (
  <ProductDisplayContextProvider>
    <Provider store={store}>
      <HomePage />
    </Provider>
  </ProductDisplayContextProvider>
);

const MockedProviderComponent = ({ children }) => (
  <ProductDisplayContextProvider>
    <Provider store={store}>
      <ComponentOpenAndCloseModal />
    </Provider>
  </ProductDisplayContextProvider>
);

describe("Home Page component", () => {
  test("should Home Page component snapshot", () => {
    const { asFragment } = render(<MockedProviderHomePage />);
    expect(asFragment()).toMatchSnapshot();
  });
});

describe("checking the modal window to add a product to the cart", () => {
  test("should add a product to the cart", () => {
    render(<MockedProviderComponent />);
    const btnOpenModal = screen.getByText("Open Modal");
    fireEvent.click(btnOpenModal);

    const btnAddProduct = screen.getByText("Add");
    fireEvent.click(btnAddProduct);

    expect(screen.getByTestId("card-root")).toBeInTheDocument();
  });
});

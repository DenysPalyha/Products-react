import { render, screen, fireEvent } from "@testing-library/react";

import Button from "./Button";

const handleClick = jest.fn();

describe("Render Button", () => {
  test("should Button render", () => {
    const { asFragment } = render(
      <Button bgColor="#fff" textBtn="Testing Button" disabledBtn={false} />
    );

    expect(asFragment()).toMatchSnapshot();
  });
});

describe("Button hendler click", () => {
  test("should Button hendler click worcking", () => {
    render(
      <Button
        bgColor="#fff"
        textBtn="Testing Button"
        hendlerClik={handleClick}
        disabledBtn={false}
      />
    );

    const btn = screen.getByText("Testing Button");
    fireEvent.click(btn);
    expect(handleClick).toHaveBeenCalled();
  });
});

import { render } from "@testing-library/react";

import Modal from "./Modal";

describe("Modal snapshot component", () => {
  test("should Modal must match snapshot", () => {
    const { asFragment } = render(
      <Modal
        header="modal test"
        text="text test"
        closeButton={true}
        actions={<button>click test</button>}
        closeModale={() => {}}
      />
    );
    expect(asFragment()).toMatchSnapshot();
  });
});

import { render, screen } from "@testing-library/react";
import Errors from "../Errors";

describe("View :: error :: Errors", () => {
  describe("when receive an error", () => {
    it("render error list", () => {
      render(
        <Errors
          errors={[
            { code: 1, message: "ohno!" },
            { code: 2, message: "nope!" },
          ]}
        />
      );
      expect(screen.getByTestId("errors")).toBeInTheDocument(/ohono!/);
      expect(screen.getByTestId("errors")).toBeInTheDocument(/nope!/);
    });
  });
});

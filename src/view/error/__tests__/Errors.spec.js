import { render, screen } from "@testing-library/react";
import Errors from "../Errors";

describe("View :: error :: Errors", () => {
  describe("when receive an error with detail", () => {
    it("render error list", () => {
      render(<Errors error={{ details: ["ohno!", "nope!"] }} />);
      expect(screen.getByTestId("errors")).toBeInTheDocument(/ohono!/);
      expect(screen.getByTestId("errors")).toBeInTheDocument(/nope!/);
    });
  });

  describe("when receive an error with a message", () => {
    it("render an error", () => {
      render(<Errors error={{ message: "ohno!" }} />);
      expect(screen.getByTestId("errors")).toBeInTheDocument(/ohono!/);
    });
  });

  describe("when receive an empty error", () => {
    it("render nothing", () => {
      const { container } = render(<Errors error={{}} />);
      expect(container).toBeEmptyDOMElement();
    });
  });
});

import { render, screen } from "@testing-library/react";
import ArticleList from "../ArticleList";

describe("view :: article :: ArticleList", () => {
  describe("when have error", () => {
    it("show error message", () => {
      render(<ArticleList error={{}} />);
      expect(screen.getByText(/Error/)).toBeInTheDocument();
    });
  });

  describe("when is loading", () => {
    it("show loading message", () => {
      render(<ArticleList isLoading />);
      expect(screen.getByText(/loading/i)).toBeInTheDocument();
    });
  });

  describe("when there is no article", () => {
    it("show no articles message", () => {
      render(<ArticleList articles={[]} />);
      expect(screen.getByText(/articles/i)).toBeInTheDocument();
    });
  });
});

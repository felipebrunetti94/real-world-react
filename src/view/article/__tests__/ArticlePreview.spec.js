import { createMemoryHistory } from "history";
import { Router, Switch, Route } from "react-router-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import ArticlePreview from "../ArticlePreview";
import { useAuthContext } from "../../../state/auth/context";

jest.mock("../../../state/auth/context");

const articleMock = {
  author: {
    username: "article-author",
    image: "image.png",
  },
  createdAt: new Date(),
  title: "article-title",
  description: "article-description",
  slug: "article-slug",
};

const customRender = (ui, options) => {
  const { history, ...defaultOptions } = options;

  return render(
    <Router history={history}>
      <Switch>
        <Route exact path="/@article-author">
          <h1>Author's Page</h1>
        </Route>
        <Route exact path="/article/article-slug">
          <h1>Article's Page</h1>
        </Route>
        <Route exact path="/test">
          {ui}
        </Route>
      </Switch>
    </Router>,
    defaultOptions
  );
};

let onToggleMock;

beforeEach(() => {
  useAuthContext.mockReturnValue({ loggedIn: true });
  onToggleMock = jest.fn();
  const history = createMemoryHistory();
  history.push("/test");
  customRender(
    <ArticlePreview article={articleMock} onToggleLike={onToggleMock} />,
    { history }
  );
});

describe("view :: article :: ArticlePreview", () => {
  describe("when render", () => {
    it("shows article author's username", () => {
      expect(screen.getByText(articleMock.author.username)).toBeVisible();
    });

    it("shows article title", () => {
      expect(screen.getByText(articleMock.title)).toBeVisible();
    });

    it("shows article description", () => {
      expect(screen.getByText(articleMock.description)).toBeVisible();
    });
  });

  describe("when click on article author username", () => {
    it("redirects to authors page", () => {
      fireEvent.click(screen.getByText(articleMock.author.username));
      expect(screen.getByText("Author's Page")).toBeInTheDocument();
    });
  });

  describe("when click on article preview", () => {
    it("redirects to article page", () => {
      fireEvent.click(screen.getByTestId(`preview-${articleMock.slug}`));
      expect(screen.getByText("Article's Page")).toBeInTheDocument();
    });
  });
});

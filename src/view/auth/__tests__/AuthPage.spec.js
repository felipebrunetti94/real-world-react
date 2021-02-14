import { fireEvent, getRoles, render, screen } from "@testing-library/react";
import AuthPage from "../AuthPage";

describe("View :: Auth :: AuthPage", () => {
  it("matches snapshot", () => {
    const props = {
      title: "test",
      showUsername: true,
      onSubmit: () => {},
      isLoading: false,
      errors: [],
      updateAuthInfo: () => {},
      authInfo: {},
    };
    const { container } = render(<AuthPage {...props} />);
    expect(container.firstChild).toMatchSnapshot();
  });

  describe("when click on submit button", () => {
    it("call on submit with Auth Info", () => {
      const onSubmit = jest.fn();
      const authInfo = "auth info";
      const props = {
        title: "test",
        showUsername: true,
        onSubmit,
        isLoading: false,
        errors: [],
        updateAuthInfo: () => {},
        authInfo,
      };
      const { getByRole } = render(<AuthPage {...props} />);
      fireEvent.click(getByRole("button", { type: "submit" }));
      expect(onSubmit).toHaveBeenCalledWith(authInfo);
    });
  });

  describe("when update field", () => {
    it("call Update Auth Info with name and value of updated field", () => {
      const updateAuthInfo = jest.fn();
      const props = {
        title: "test",
        showUsername: true,
        onSubmit: () => {},
        isLoading: false,
        errors: [],
        updateAuthInfo,
        authInfo: {},
      };
      const { getByTestId } = render(<AuthPage {...props} />);

      fireEvent.change(getByTestId("input-username"), {
        target: {
          value: "text",
        },
      });

      expect(updateAuthInfo).toHaveBeenCalledWith({ username: "text" });
    });
  });

  describe("when receive Show User Name", () => {
    it("shows username field", () => {
      const props = {
        title: "test",
        showUsername: true,
        onSubmit: () => {},
        isLoading: false,
        errors: [],
        updateAuthInfo: () => {},
        authInfo: {},
      };
      const { getByTestId } = render(<AuthPage {...props} />);
      expect(getByTestId("input-username")).toBeInTheDocument();
    });
  });

  describe("when Is Loading", () => {
    it("submit button is disabled", () => {
      const props = {
        title: "test",
        showUsername: true,
        onSubmit: () => {},
        isLoading: true,
        errors: [],
        updateAuthInfo: () => {},
        authInfo: {},
      };
      const { getByRole } = render(<AuthPage {...props} />);

      expect(getByRole("button", { type: "submit" })).toBeDisabled();
    });
  });

  describe("when receive Errors", () => {
    it("show errors list", () => {
      const props = {
        title: "test",
        showUsername: true,
        onSubmit: () => {},
        isLoading: false,
        errors: [{ code: "1", message: "ohno!" }],
        updateAuthInfo: () => {},
        authInfo: {},
      };
      const { getByText } = render(<AuthPage {...props} />);

      expect(getByText("ohno!")).toBeInTheDocument();
    });
  });
});

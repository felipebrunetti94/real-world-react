import SettingsPage from "../SettingsPage";
import { useAuthContext } from "../../../state/auth/context";
import { fireEvent, screen, render } from "@testing-library/react";

jest.mock("../../../state/auth/context");

const user = {
  bio: "user bio",
  username: "user username",
  image: "image.png",
  password: "user password",
  email: "user email",
};

let setUserInfo;
let onEditUser;

beforeEach(() => {
  setUserInfo = jest.fn();
  onEditUser = jest.fn();
  useAuthContext.mockReturnValue({
    user,
    isLoading: false,
    setUserInfo,
    onEditUser,
  });
});

describe("view :: user :: Settings Page", () => {
  describe("when click on submit button", () => {
    it("calls onEditUser", () => {
      render(<SettingsPage />);

      expect(onEditUser).not.toHaveBeenCalled();

      fireEvent.click(screen.getByRole("button", { type: "submit" }));

      expect(onEditUser).toHaveBeenCalled();
    });
  });

  describe("when render", () => {
    beforeEach(() => {
      render(<SettingsPage />);
    });

    it("shows image value", () => {
      expect(screen.getByDisplayValue(user.image)).toBeInTheDocument();
    });

    it("shows username value", () => {
      expect(screen.getByDisplayValue(user.username)).toBeInTheDocument();
    });

    it("shows bio value", () => {
      expect(screen.getByDisplayValue(user.bio)).toBeInTheDocument();
    });

    it("not shows password value", () => {
      expect(screen.queryByDisplayValue(user.password)).not.toBeInTheDocument();
    });

    it("shows email value", () => {
      expect(screen.getByDisplayValue(user.email)).toBeInTheDocument();
    });
  });

  describe("when is loading", () => {
    beforeEach(() => {
      useAuthContext.mockReturnValue({
        user,
        isLoading: true,
        setUserInfo,
        onEditUser,
      });

      render(<SettingsPage />);
    });

    it("disable button", () => {
      expect(screen.getByRole("button", { type: "submit" })).toBeDisabled();
    });

    it("disable image field", () => {
      expect(
        screen.getByPlaceholderText("URL of profile picture")
      ).toBeDisabled();
    });

    it("disable username field", () => {
      expect(screen.getByPlaceholderText("Your Name")).toBeDisabled();
    });

    it("disable bio field", () => {
      expect(screen.getByPlaceholderText("Short bio about you")).toBeDisabled();
    });

    it("disable password field", () => {
      expect(screen.getByPlaceholderText("Password")).toBeDisabled();
    });

    it("disable email field", () => {
      expect(screen.getByPlaceholderText("Email")).toBeDisabled();
    });
  });

  describe("when change input", () => {
    beforeEach(() => {
      useAuthContext.mockReturnValue({
        user,
        isLoading: false,
        setUserInfo,
        onEditUser,
      });

      render(<SettingsPage />);
    });

    it("calls setUserInfo with key image and value", () => {
      fireEvent.change(screen.getByPlaceholderText("URL of profile picture"), {
        target: { value: "value" },
      });

      expect(setUserInfo).toHaveBeenCalledWith({ image: "value" });
    });

    it("calls setUserInfo with key username and value", () => {
      fireEvent.change(expect(screen.getByPlaceholderText("Your Name")), {
        target: { value: "value" },
      });

      expect(setUserInfo).toHaveBeenCalledWith({ username: "value" });
    });

    it("calls setUserInfo with key bio and value", () => {
      fireEvent.change(
        expect(screen.getByPlaceholderText("Short bio about you")),
        {
          target: { value: "value" },
        }
      );

      expect(setUserInfo).toHaveBeenCalledWith({ bio: "value" });
    });

    it("calls setUserInfo with key password and value", () => {
      fireEvent.change(expect(screen.getByPlaceholderText("Password")), {
        target: { value: "value" },
      });

      expect(setUserInfo).toHaveBeenCalledWith({ password: "value" });
    });

    it("calls setUserInfo with key email and value", () => {
      fireEvent.change(expect(screen.getByPlaceholderText("Email")), {
        target: { value: "value" },
      });

      expect(setUserInfo).toHaveBeenCalledWith({ email: "value" });
    });
  });
});

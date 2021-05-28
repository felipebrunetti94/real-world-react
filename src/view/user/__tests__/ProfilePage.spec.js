import { render, screen } from "@testing-library/react";
import ProfilePage from "../ProfilePage";

const user = {
  username: "username",
  bio: "bio",
  image: "image",
};

describe("view :: user :: ProfilePage", () => {
  beforeEach(() => {
    render(
      <ProfilePage
        user={user}
        getProfileButton={() => <button>Hi I'm a button</button>}
      />
    );
  });

  it("should show authors username", () => {
    expect(screen.getByText(user.username)).toBeVisible();
  });

  it("should show authors image", () => {
    expect(screen.getByAltText(`${user.username} profile`)).toBeVisible();
    expect(screen.getByAltText(`${user.username} profile`)).toHaveAttribute(
      "src",
      user.image
    );
  });

  it("should show authors bio", () => {
    expect(screen.getByText(user.bio)).toBeVisible();
  });

  it("should render getProfileButton", () => {
    expect(screen.getByText("Hi I'm a button")).toBeVisible();
  });

  describe("when click on articles tab", () => {
    it("should reload articles", () => {});
  });
});

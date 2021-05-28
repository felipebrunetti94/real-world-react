import { fireEvent, render, screen } from "@testing-library/react";
import ToggleFollowButton from "../ToggleFollowButton";

let author = {
  following: true,
  username: "author name",
};
let onToggleMock;
let isLoading = false;

describe("view :: user :: ToggleFollowButton", () => {
  beforeEach(() => {
    onToggleMock = jest.fn();
  });

  describe("when not following author", () => {
    it("should show follow button", () => {
      author.following = false;
      render(
        <ToggleFollowButton
          author={author}
          onToggle={onToggleMock}
          isLoading={isLoading}
        />
      );
      expect(screen.getByRole("button")).toHaveTextContent(/follow/i);
    });
  });

  describe("when following author", () => {
    it("should show unfollow button", () => {
      author.following = true;
      render(
        <ToggleFollowButton
          author={author}
          onToggle={onToggleMock}
          isLoading={isLoading}
        />
      );
      expect(screen.getByRole("button")).toHaveTextContent(/unfollow/i);
    });
  });

  describe("when is loading", () => {
    it("should disable button", () => {
      isLoading = true;
      render(
        <ToggleFollowButton
          author={author}
          onToggle={onToggleMock}
          isLoading={isLoading}
        />
      );
      expect(screen.getByRole("button")).toBeDisabled();
    });
  });

  describe("when click on follow/unfollow button", () => {
    it("should call onFollowUser", () => {
      isLoading = false;

      render(
        <ToggleFollowButton
          author={author}
          onToggle={onToggleMock}
          isLoading={isLoading}
        />
      );

      fireEvent.click(screen.getByRole("button"));

      expect(onToggleMock).toHaveBeenCalled();
    });
  });
});

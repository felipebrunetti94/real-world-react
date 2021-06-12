import { User, UserRepository } from "../../../domain/user/User";
import makeEditUser, { Callback } from "../editUser";

describe("App :: User :: editUser", () => {
  const callback: Callback = {
    onSuccess: jest.fn(),
    onError: jest.fn(),
  };

  const mockUserRepository: UserRepository = {
    update: jest.fn(),
    add: jest.fn(),
    authBy: jest.fn(),
  };

  const editUser = makeEditUser(mockUserRepository);

  const user: User = {
    token: "tokenMock",
    username: "usernameMock",
    email: "emailMock",
    bio: "bioMock",
  };

  it("passes the data to the user repository", async () => {
    await editUser(user, callback);

    expect(mockUserRepository.update).toBeCalledWith(
      { username: "usernameMock", email: "emailMock", bio: "bioMock" },
      user.token
    );
  });

  describe("when it succeeds", () => {
    beforeEach(() => {
      mockUserRepository.update = jest
        .fn()
        .mockResolvedValueOnce("updatedUser");
    });

    it("call onSuccess callback with the updated user", async () => {
      await editUser(user, callback);

      expect(callback.onSuccess).toBeCalledWith("updatedUser");
    });

    it("don't call onError", async () => {
      await editUser(user, callback);
      expect(callback.onError).not.toBeCalled();
    });
  });

  describe("when it fails", () => {
    beforeEach(() => {
      mockUserRepository.update = jest
        .fn()
        .mockRejectedValueOnce(new Error("error!"));
    });

    it("call onError callback with the error", async () => {
      await editUser(user, callback);
      expect(callback.onError).toBeCalledWith(new Error("error!"));
    });

    it("don't call onSuccess", async () => {
      await editUser(user, callback);
      expect(callback.onSuccess).not.toBeCalled();
    });
  });
});

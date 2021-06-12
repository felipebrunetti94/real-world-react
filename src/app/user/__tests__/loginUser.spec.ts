import { UserAuthInfo, UserRepository, User } from "../../../domain/user/User";
import makeLoginUser from "../loginUser";

describe("App :: User :: loginUser", () => {
  const mockUserRepository: UserRepository = {
    update: jest.fn(),
    add: jest.fn(),
    authBy: jest.fn(),
  };

  const loginUser = makeLoginUser(mockUserRepository);

  const callback = {
    onError: jest.fn(),
    onSuccess: jest.fn(),
  };

  const userAuth: UserAuthInfo = {
    username: "usernameMock",
    email: "emailMock",
    password: "passwordMock",
  };

  const user: User = {
    username: "usernameMock",
    email: "emailMock",
    bio: "bioMock",
    token: "tokenMock",
  };

  it("passes the user auth to the user repository", async () => {
    await loginUser(userAuth, callback);

    expect(mockUserRepository.authBy).toBeCalledWith(userAuth);
  });

  describe("when it succeeds", () => {
    beforeEach(() => {
      mockUserRepository.authBy = jest.fn(() => Promise.resolve(user));
    });

    it("call onSuccess callback with the signed user", async () => {
      await loginUser(userAuth, callback);

      expect(callback.onSuccess).toBeCalledWith(user);
      expect(callback.onError).not.toBeCalled();
    });
  });

  describe("when it fails", () => {
    beforeEach(() => {
      mockUserRepository.authBy = jest.fn(() =>
        Promise.reject(new Error("error!"))
      );
    });

    it("call onError callback with the error", async () => {
      await loginUser(userAuth, callback);

      expect(callback.onError).toBeCalledWith(new Error("error!"));
      expect(callback.onSuccess).not.toBeCalled();
    });
  });
});

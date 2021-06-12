import { UserAuthInfo, UserRepository, User } from "../../../domain/user/User";
import makeRegisterUser from "../registerUser";

describe("App :: User :: registerUser", () => {
  const mockUserRepository: UserRepository = {
    update: jest.fn(),
    add: jest.fn(),
    authBy: jest.fn(),
  };

  const registerUser = makeRegisterUser(mockUserRepository);

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
    await registerUser(userAuth, callback);

    expect(mockUserRepository.add).toBeCalledWith(userAuth);
  });

  describe("when it succeeds", () => {
    beforeEach(() => {
      mockUserRepository.add = jest.fn(() => Promise.resolve(user));
    });

    it("call onSuccess callback with the signed user", async () => {
      await registerUser(userAuth, callback);

      expect(callback.onSuccess).toBeCalledWith(user);
      expect(callback.onError).not.toBeCalled();
    });
  });

  describe("when it fails", () => {
    beforeEach(() => {
      mockUserRepository.add = jest.fn(() =>
        Promise.reject(new Error("error!"))
      );
    });

    it("call onError callback with the error", async () => {
      await registerUser(userAuth, callback);

      expect(callback.onError).toBeCalledWith(new Error("error!"));
      expect(callback.onSuccess).not.toBeCalled();
    });
  });
});

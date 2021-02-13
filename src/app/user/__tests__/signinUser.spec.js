import makeSigninUSer from "../signinUser";

describe("App :: User :: signinUser", () => {
  let registerUSer;
  let mockUserRepository;
  const userAuth = "userAuth";

  it("passes the user auth to the user repository", async () => {
    mockUserRepository = {
      authBy: jest.fn(),
    };

    registerUSer = makeSigninUSer({
      userRepository: mockUserRepository,
    });

    await registerUSer(userAuth, { onSuccess: () => {}, onError: () => {} });

    expect(mockUserRepository.authBy).toBeCalledWith(userAuth);
  });

  describe("when it succeeds", () => {
    beforeEach(() => {
      mockUserRepository = {
        authBy: jest.fn(() => Promise.resolve("signedUser")),
      };
      registerUSer = makeSigninUSer({ userRepository: mockUserRepository });
    });

    it("call onSuccess callback with the signed user", async () => {
      const onSuccess = jest.fn();
      const onError = jest.fn();

      await registerUSer(userAuth, { onSuccess, onError });

      expect(onSuccess).toBeCalledWith("signedUser");
      expect(onError).not.toBeCalled();
    });
  });

  describe("when it fails", () => {
    beforeEach(() => {
      mockUserRepository = {
        authBy: jest.fn(() => Promise.reject(new Error("error!"))),
      };
      registerUSer = makeSigninUSer({ userRepository: mockUserRepository });
    });

    it("call onError callback with the error", async () => {
      const onSuccess = jest.fn();
      const onError = jest.fn();

      await registerUSer(userAuth, { onSuccess, onError });

      expect(onError).toBeCalledWith(new Error("error!"));
      expect(onSuccess).not.toBeCalled();
    });
  });
});

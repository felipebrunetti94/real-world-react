import makeRegisterUSer from "../registerUser";

describe("App :: User :: registerUser", () => {
  let registerUSer;
  let mockUserRepository;
  const userInfo = "userInfo";

  it("passes the data to the user repository", async () => {
    mockUserRepository = {
      add: jest.fn(),
    };

    registerUSer = makeRegisterUSer({
      userRepository: mockUserRepository,
    });

    await registerUSer(userInfo, { onSuccess: () => {}, onError: () => {} });

    expect(mockUserRepository.add).toBeCalledWith(userInfo);
  });

  describe("when it succeeds", () => {
    beforeEach(() => {
      mockUserRepository = {
        add: jest.fn(() => Promise.resolve("newUser")),
      };
      registerUSer = makeRegisterUSer({ userRepository: mockUserRepository });
    });

    it("call onSuccess callback with the new user", async () => {
      const onSuccess = jest.fn();
      const onError = jest.fn();

      await registerUSer(userInfo, { onSuccess, onError });

      expect(onSuccess).toBeCalledWith("newUser");
      expect(onError).not.toBeCalled();
    });
  });

  describe("when it fails", () => {
    beforeEach(() => {
      mockUserRepository = {
        add: jest.fn(() => Promise.reject(new Error("error!"))),
      };
      registerUSer = makeRegisterUSer({ userRepository: mockUserRepository });
    });

    it("call onError callback with the error", async () => {
      const onSuccess = jest.fn();
      const onError = jest.fn();

      await registerUSer(userInfo, { onSuccess, onError });

      expect(onError).toBeCalledWith(new Error("error!"));
      expect(onSuccess).not.toBeCalled();
    });
  });
});

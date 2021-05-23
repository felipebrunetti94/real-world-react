import makeEditUser from "../editUser";

describe("App :: User :: editUser", () => {
  let onSuccess, onError, mockUserRepository, editUser;
  const editedUser = "editedUser";

  beforeEach(() => {
    mockUserRepository = {
      update: jest.fn(),
    };
    editUser = makeEditUser({
      userRepository: mockUserRepository,
    });
    onSuccess = jest.fn();
    onError = jest.fn();
  });

  it("passes the data to the user repository", async () => {
    await editUser(editedUser, { onSuccess, onError });

    expect(mockUserRepository.update).toBeCalledWith(editedUser);
  });

  describe("when it succeeds", () => {
    beforeEach(() => {
      mockUserRepository.update = jest
        .fn()
        .mockResolvedValueOnce("updatedUser");
    });

    it("call onSuccess callback with the updated user", async () => {
      await editUser(editedUser, { onSuccess, onError });

      expect(onSuccess).toBeCalledWith("updatedUser");
    });

    it("don't call onError", async () => {
      await editUser(editedUser, { onSuccess, onError });
      expect(onError).not.toBeCalled();
    });
  });

  describe("when it fails", () => {
    beforeEach(() => {
      mockUserRepository.update = jest
        .fn()
        .mockRejectedValueOnce(new Error("error!"));
    });

    it("call onError callback with the error", async () => {
      await editUser(editedUser, { onSuccess, onError });
      expect(onError).toBeCalledWith(new Error("error!"));
    });

    it("don't call onSuccess", async () => {
      await editUser(editedUser, { onSuccess, onError });
      expect(onSuccess).not.toBeCalled();
    });
  });
});

import makeUserRepository from "../userRepository";

describe("Infra :: User :: userRepository", () => {
  let userRepository;
  let conduitService;
  const successResponse = { data: { user: "user" } };
  const errorResponse = { errors: ["nope!", "ohno!"] };
  const user = { auth: "auth" };

  describe("#add", () => {
    it("uses the conduit service to make the request", async () => {
      conduitService = {
        post: jest.fn().mockReturnValue(Promise.resolve(successResponse)),
      };
      userRepository = makeUserRepository({ conduitService });
      await userRepository.add("user");
      expect(conduitService.post).toHaveBeenCalledWith("users", {
        user: "user",
      });
    });

    describe("when success", () => {
      it("resolves with user", () => {
        conduitService = {
          post: jest.fn().mockReturnValue(Promise.resolve(successResponse)),
        };
        userRepository = makeUserRepository({ conduitService });

        return expect(userRepository.add("user")).resolves.toEqual({
          user: "user",
        });
      });
    });

    describe("when fails", () => {
      it("rejects with errors", () => {
        conduitService = {
          post: jest.fn().mockReturnValue(Promise.reject(errorResponse)),
        };
        userRepository = makeUserRepository({ conduitService });

        return expect(userRepository.add("user")).rejects.toEqual({
          errors: ["nope!", "ohno!"],
        });
      });
    });
  });

  describe("#authBy", () => {
    it("uses the conduit service to make the request", async () => {
      conduitService = {
        post: jest.fn().mockReturnValue(Promise.resolve(successResponse)),
      };
      userRepository = makeUserRepository({ conduitService });
      await userRepository.authBy("userInfo");
      expect(conduitService.post).toHaveBeenCalledWith("users/login", {
        user: "userInfo",
      });
    });

    describe("when success", () => {
      it("resolves with user", () => {
        conduitService = {
          post: jest.fn().mockReturnValue(Promise.resolve(successResponse)),
        };
        userRepository = makeUserRepository({ conduitService });

        return expect(userRepository.authBy("userInfo")).resolves.toEqual({
          user: "user",
        });
      });
    });

    describe("when fails", () => {
      it("rejects with errors", () => {
        conduitService = {
          post: jest.fn().mockReturnValue(Promise.reject(errorResponse)),
        };
        userRepository = makeUserRepository({ conduitService });

        return expect(userRepository.authBy("user")).rejects.toEqual({
          errors: ["nope!", "ohno!"],
        });
      });
    });
  });

  describe("#getByToken", () => {
    it("uses the conduit service to make the request", async () => {
      conduitService = {
        authGet: jest.fn().mockReturnValue(Promise.resolve(successResponse)),
      };
      userRepository = makeUserRepository({ conduitService });
      await userRepository.getByToken(user);
      expect(conduitService.authGet).toHaveBeenCalledWith("user", "auth");
    });

    describe("when success", () => {
      it("resolves with user", () => {
        conduitService = {
          authGet: jest.fn().mockReturnValue(Promise.resolve(successResponse)),
        };
        userRepository = makeUserRepository({ conduitService });

        return expect(userRepository.getByToken(user)).resolves.toEqual({
          user: "user",
        });
      });
    });

    describe("when fails", () => {
      it("rejects with errors", () => {
        conduitService = {
          authGet: jest.fn().mockReturnValue(Promise.reject(errorResponse)),
        };
        userRepository = makeUserRepository({ conduitService });

        return expect(userRepository.getByToken(user)).rejects.toEqual({
          errors: ["nope!", "ohno!"],
        });
      });
    });
  });

  describe("#update", () => {
    it("uses the conduit service to make the request", async () => {
      conduitService = {
        authPut: jest.fn().mockReturnValue(Promise.resolve(successResponse)),
      };
      userRepository = makeUserRepository({ conduitService });
      await userRepository.update("editedUser", user);
      expect(conduitService.authPut).toHaveBeenCalledWith("user", "auth", {
        user: "editedUser",
      });
    });

    describe("when success", () => {
      it("resolves with user", () => {
        conduitService = {
          authPut: jest.fn().mockReturnValue(Promise.resolve(successResponse)),
        };
        userRepository = makeUserRepository({ conduitService });

        return expect(userRepository.update("user", user)).resolves.toEqual({
          user: "user",
        });
      });
    });

    describe("when fails", () => {
      it("rejects with errors", () => {
        conduitService = {
          authPut: jest.fn().mockReturnValue(Promise.reject(errorResponse)),
        };
        userRepository = makeUserRepository({ conduitService });

        return expect(userRepository.update("user", user)).rejects.toEqual({
          errors: ["nope!", "ohno!"],
        });
      });
    });
  });
});

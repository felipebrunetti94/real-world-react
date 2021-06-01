import { renderHook, act } from "@testing-library/react-hooks";
import useAuth from "../useAuth";

describe("State :: Auth :: useAuth", () => {
  let registerUser;
  let loginUser;
  let cache;

  beforeEach(() => {
    registerUser = jest.fn();
    loginUser = jest.fn();
    cache = {
      get: jest.fn().mockReturnValueOnce(null),
      set: jest.fn(),
      clear: jest.fn(),
    };
  });

  describe("quando cache está vazio", () => {
    it("usuário está deslogado", () => {
      const { result } = renderHook(() =>
        useAuth({ registerUser, loginUser, cache })
      );

      expect(result.current.loggedIn).toBeFalsy();
    });
  });

  describe("quando possui token do usuário no cache", () => {
    beforeEach(() => {
      cache.get = jest.fn().mockReturnValueOnce({ token: "usertoken" });
    });

    it("usuário está logado", () => {
      const { result } = renderHook(() =>
        useAuth({ registerUser, loginUser, cache })
      );

      expect(result.current.loggedIn).toBeTruthy();
    });
  });

  describe("#userLogin", () => {
    it("entra em loading", () => {
      const { result } = renderHook(() =>
        useAuth({ registerUser, loginUser, cache })
      );

      expect(result.current.isLoading).toBeFalsy();

      act(() => {
        result.current.onUserLogin("user");
      });

      expect(result.current.isLoading).toBeTruthy();
    });

    describe("quando sucesso", () => {
      beforeEach(() => {
        loginUser = jest.fn((user, { onSuccess }) => onSuccess(user));
      });
      it("calls loginUser with user", () => {
        const { result } = renderHook(() =>
          useAuth({ registerUser, loginUser, cache })
        );

        act(() => {
          result.current.onUserLogin("user");
        });

        expect(loginUser).toHaveBeenCalledWith("user", expect.anything());
        expect(result.current.user).toBe("user");
      });

      it("updates current user", () => {
        const { result } = renderHook(() =>
          useAuth({ registerUser, loginUser, cache })
        );

        act(() => {
          result.current.onUserLogin("user");
        });

        expect(result.current.user).toBe("user");
      });
    });

    describe("quando falhar", () => {
      beforeEach(() => {
        loginUser = jest.fn((_, { onError }) => onError("ohno!"));
      });

      it("updates error", () => {
        const { result } = renderHook(() =>
          useAuth({ registerUser, loginUser, cache })
        );

        act(() => {
          result.current.onUserLogin();
        });

        expect(result.current.error).toBe("ohno!");
      });
    });
  });

  describe("quando usuario mudar", () => {
    it("atualiza o cache com novo usuário", () => {});
  });

  describe("#onSignOut", () => {});

  describe("#onRegisterUser", () => {});
  describe("#updateAuthInfo", () => {});

  describe("when calls setUserInfo", () => {
    it("should update user", () => {
      const { result } = renderHook(() =>
        useAuth({ registerUser, loginUser, cache })
      );

      expect(result.current.user).toEqual({});

      act(() => {
        result.current.setUserInfo({ test: "test" });
      });

      expect(result.current.user).toEqual({ test: "test" });
    });
  });

  describe("#onEditUser", () => {
    describe("on Success", () => {
      it("should update user", () => {
        const onEditUserMock = jest.fn((_, { onSuccess }) =>
          onSuccess({ username: "testuser" })
        );
        const { result } = renderHook(() =>
          useAuth({ registerUser, loginUser, cache, editUser: onEditUserMock })
        );

        expect(result.current.user).toEqual({});

        act(() => {
          result.current.onEditUser();
        });

        expect(result.current.user).toEqual({ username: "testuser" });
      });
    });

    describe("on Error", () => {
      it("should update error", () => {
        const onEditUserMock = jest.fn((_, { onError }) => onError("ohno!"));
        const { result } = renderHook(() =>
          useAuth({ registerUser, loginUser, cache, editUser: onEditUserMock })
        );

        act(() => {
          result.current.onEditUser();
        });

        expect(result.current.error).toEqual("ohno!");
      });
    });
  });
});

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
});

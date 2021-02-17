import reducer from "../reducer";
import * as AUTH from "../types";

describe("State :: Auth :: Reducer", () => {
  describe("when undefined", () => {
    it("returns initial state", () => {
      expect(reducer({}, {})).toEqual({});
    });
  });

  describe("when Update Auth Info", () => {
    it("updates initial state with new auth info", () => {
      const action = {
        type: AUTH.UPDATE_AUTH_INFO,
        authInfo: {
          key: "value",
        },
      };
      const state = {
        authInfo: {},
        error: null,
      };

      expect(reducer(state, action)).toEqual({
        authInfo: { key: "value" },
        error: null,
      });
    });
  });

  describe("when Register User", () => {
    it("update loading and errors", () => {
      const action = {
        type: AUTH.REGISTER_USER_REQUEST,
      };
      const state = {
        isLoading: false,
        error: { message: "ohno!" },
      };

      expect(reducer(state, action)).toEqual({
        isLoading: true,
        error: {},
      });
    });
  });

  describe("when Login User", () => {
    it("update loading and errors", () => {
      const action = {
        type: AUTH.REGISTER_USER_REQUEST,
      };
      const state = {
        isLoading: false,
        error: "ohno!",
      };

      expect(reducer(state, action)).toEqual({
        isLoading: true,
        error: {},
      });
    });
  });

  describe("when Register User error", () => {
    it("disable loading and update errors", () => {
      const action = {
        type: AUTH.REGISTER_USER_REQUEST_ERROR,
        error: { message: "ohno!" },
      };
      const state = {
        isLoading: true,
        error: {},
      };

      expect(reducer(state, action)).toEqual({
        isLoading: false,
        error: { message: "ohno!" },
      });
    });
  });

  describe("when Login User error", () => {
    it("disable loading, update errors and remove password", () => {
      const action = {
        type: AUTH.LOGIN_USER_REQUEST_ERROR,
        error: { message: "ohno!" },
      };
      const state = {
        isLoading: true,
        error: {},
        authInfo: {
          password: "password",
          username: "username",
        },
      };

      expect(reducer(state, action)).toEqual({
        isLoading: false,
        error: { message: "ohno!" },
        authInfo: {
          username: "username",
          password: "",
        },
      });
    });
  });

  describe("when Register User Success", () => {
    it("disable loading and errors", () => {
      const action = {
        type: AUTH.REGISTER_USER_REQUEST_SUCCESS,
      };
      const state = {
        isLoading: true,
        error: { message: "error" },
        authInfo: {
          key: "value",
        },
      };

      expect(reducer(state, action)).toEqual({
        isLoading: false,
        error: {},
        authInfo: {},
      });
    });
  });

  describe("when Login User Success", () => {
    it("disable loading and errors", () => {
      const action = {
        type: AUTH.LOGIN_USER_REQUEST_SUCCESS,
      };
      const state = {
        isLoading: true,
        error: { message: "ohno!" },
        authInfo: {
          key: "value",
        },
      };

      expect(reducer(state, action)).toEqual({
        isLoading: false,
        error: {},
        authInfo: {},
      });
    });
  });
});

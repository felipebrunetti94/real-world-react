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
        type: AUTH.REGISTER_USER,
      };
      const state = {
        isLoading: false,
        errors: ["ohno!"],
      };

      expect(reducer(state, action)).toEqual({
        isLoading: true,
        errors: [],
      });
    });
  });

  describe("when Login User", () => {
    it("update loading and errors", () => {
      const action = {
        type: AUTH.REGISTER_USER,
      };
      const state = {
        isLoading: false,
        errors: ["ohno!"],
      };

      expect(reducer(state, action)).toEqual({
        isLoading: true,
        errors: [],
      });
    });
  });

  describe("when Register User error", () => {
    it("disable loading and update errors", () => {
      const action = {
        type: AUTH.REGISTER_USER_ERROR,
        errors: ["ohno!"],
      };
      const state = {
        isLoading: true,
        errors: [],
      };

      expect(reducer(state, action)).toEqual({
        isLoading: false,
        errors: ["ohno!"],
      });
    });
  });

  describe("when Login User error", () => {
    it("disable loading, update errors and remove password", () => {
      const action = {
        type: AUTH.LOGIN_USER_ERROR,
        errors: ["ohno!"],
      };
      const state = {
        isLoading: true,
        errors: [],
        authInfo: {
          password: "password",
          username: "username",
        },
      };

      expect(reducer(state, action)).toEqual({
        isLoading: false,
        errors: ["ohno!"],
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
        type: AUTH.REGISTER_USER_SUCCESS,
      };
      const state = {
        isLoading: true,
        errors: ["ohno!"],
        authInfo: {
          key: "value",
        },
      };

      expect(reducer(state, action)).toEqual({
        isLoading: false,
        errors: [],
        authInfo: {},
      });
    });
  });

  describe("when Login User Success", () => {
    it("disable loading and errors", () => {
      const action = {
        type: AUTH.LOGIN_USER_SUCCESS,
      };
      const state = {
        isLoading: true,
        errors: ["ohno!"],
        authInfo: {
          key: "value",
        },
      };

      expect(reducer(state, action)).toEqual({
        isLoading: false,
        errors: [],
        authInfo: {},
      });
    });
  });
});

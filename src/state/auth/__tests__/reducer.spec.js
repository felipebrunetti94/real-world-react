import reducer from "../reducer";
import * as AUTH from "../types";

describe("State :: Auth :: Reducer", () => {
  test("DEFAULT", () => {
    expect(reducer({}, {})).toEqual({});
  });
});

test("UPDATE_AUTH_INFO", () => {
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

test("REGISTER_USER_REQUEST", () => {
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

test("REGISTER_USER_REQUEST_ERROR", () => {
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

test("LOGIN_USER_REQUEST_ERROR", () => {
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

test("REGISTER_USER_REQUEST_SUCCESS", () => {
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

test("LOGIN_USER_REQUEST_SUCCESS", () => {
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

test("SET_USER_INFO", () => {
  const action = {
    type: AUTH.SET_USER_INFO,
    user: { newInfo: "newInfo" },
  };

  const state = { user: { oldInfo: "oldInfo" } };

  expect(reducer(state, action)).toEqual({
    user: { newInfo: "newInfo", oldInfo: "oldInfo" },
  });
});

test("EDIT_USER_REQUEST", () => {
  const action = {
    type: AUTH.EDIT_USER_REQUEST,
  };

  const state = { error: "ohno!!", isLoading: false };

  expect(reducer(state, action)).toEqual({ error: {}, isLoading: true });
});

test("EDIT_USER_REQUEST_SUCCESS", () => {
  const action = {
    type: AUTH.EDIT_USER_REQUEST_SUCCESS,
    user: "editedUSer",
  };

  const state = { isLoading: true };

  expect(reducer(state, action)).toEqual({
    user: "editedUSer",
    isLoading: false,
  });
});

test("EDIT_USER_REQUEST_ERROR", () => {
  const action = {
    type: AUTH.EDIT_USER_REQUEST_ERROR,
    error: "ohno!!",
  };

  const state = { isLoading: true };

  expect(reducer(state, action)).toEqual({
    error: "ohno!!",
    isLoading: false,
  });
});

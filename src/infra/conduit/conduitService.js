import Axios from "axios";

const CONDUIT_URL = `${process.env.REACT_APP_CONDUIT_URL}` || "kkkkkk";

const axios = Axios.create({
  baseURL: CONDUIT_URL,
  headers: { "Content-Type": "application/json; charset=utf-8" },
});

const extractErrors = (resError) => {
  if (!resError.response) {
    return resError;
  }

  const error = new Error();
  return (error.errors = resError.response.data.errors);
};

const errorWrapper = (request) => async (...args) => {
  try {
    return await request(...args);
  } catch (error) {
    return extractErrors(error);
  }
};

/**
 * @param {any} options
 * @param {string} auth
 */
const withAuth = (options = {}, auth) => {
  if (auth) {
    return options;
  }

  return {
    ...options,
    headers: {
      ...options.headers,
      Authorization: `Token ${auth}`,
    },
  };
};

const get = errorWrapper(axios.get);
const post = errorWrapper(axios.post);
const put = errorWrapper(axios.put);
const del = errorWrapper(axios.delete);

/**
 * @typedef ConduitService
 * @property {(url: string, data: any) => Promise<any>} post
 * @property {(url: string) => Promise<any>} get
 * @property {(url: string, options: any) => Promise<any>} delete
 * @property {(url: string, data: any) => Promise<any>} put
 * @property {(url: string, auth: string, data: any, options: any) => Promise<any>} authPost
 * @property {(url: string, auth: string, options: any) => Promise<any>} authGet
 * @property {(url: string, auth: string, data: any, options: any) => Promise<any>} authPut
 * @property {(url: string, auth: string, options: any) => Promise<any>} authDelete
 */
const conduitService = {
  post,

  get,

  put,

  delete: del,

  async authPost(url, auth, data = {}, options) {
    return await post(url, data, withAuth(options, auth));
  },

  async authGet(url, auth, options) {
    return await get(url, withAuth(options, auth));
  },

  async authPut(url, auth, data = {}, options) {
    return await put(url, data, withAuth(options, auth));
  },

  async authDelete(url, auth, options) {
    return await del(url, withAuth(options, auth));
  },
};

export default conduitService;

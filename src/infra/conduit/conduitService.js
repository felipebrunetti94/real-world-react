// @ts-check

import Axios from "axios";

const CONDUIT_URL = `${process.env.CONDUIT_URL}` || "";

const axios = Axios.create({
  baseURL: CONDUIT_URL,
  headers: { "Content-Type": "application/json; charset=utf-8" },
});

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
  async post(url, data) {
    return await axios.post(url, data);
  },

  async get(url) {
    return await axios.get(url);
  },

  async delete(url, options) {
    return await axios.delete(url, options);
  },

  async put(url, data) {
    return await axios.put(url, data);
  },

  async authPost(url, auth, data = {}, options) {
    return await axios.post(url, data, withAuth(options, auth));
  },

  async authGet(url, auth, options) {
    return await axios.get(url, withAuth(options, auth));
  },

  async authPut(url, auth, data = {}, options) {
    return await axios.put(url, data, withAuth(options, auth));
  },

  async authDelete(url, auth, options) {
    return await axios.delete(url, withAuth(options, auth));
  },
};

export default conduitService;

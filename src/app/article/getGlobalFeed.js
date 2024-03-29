// @ts-check
import { User } from "../../domain/user/User";
import { Article } from "../../domain/article/Article";

/**
 * @typedef Callback
 * @property {(globalFeed: Article[]) => void} onSuccess
 * @property {(error: Error) => void} onError
 */

/**
 * @typedef Dependencies
 * @property {*} articleRepository
 */

/**
 * @param {Dependencies} dependencies
 * @returns {(callback: Callback) => void}
 */
const makeGetGlobalFeed = ({ articleRepository }) => {
  return async (user, { onSuccess, onError }) => {
    try {
      const globalFeed = await articleRepository.getGlobalFeed(user);
      onSuccess(globalFeed);
    } catch (error) {
      console.error(error);
      onError(error);
    }
  };
};

export default makeGetGlobalFeed;

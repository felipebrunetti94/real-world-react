// @ts-check
import { User } from "../../domain/user";
import { Article } from "../../domain/article";

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
 * @returns {(user: User, callback: Callback) => void}
 */
const makeGetGlobalFeed = ({ articleRepository }) => {
  return async (user, { onSuccess, onError }) => {
    try {
      const globalFeed = await articleRepository.getGlobalFeed(user);
      onSuccess(globalFeed);
    } catch (error) {
      onError(error);
    }
  };
};

export default makeGetGlobalFeed;

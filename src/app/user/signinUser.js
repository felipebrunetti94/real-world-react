// @ts-check

import { User, UserAuthInfo, UserRepository } from "../../domain/user";

/**
 * @typedef Dependencies
 * @property {UserRepository} userRepository
 */

/**
 * @typedef Callback
 * @property {(user: User) => void} onSuccess
 * @property {(error: Error) => void} onError
 */

/**
 * @param {Dependencies} dependencies
 * @returns {(info: UserAuthInfo, callback: Callback) => void}
 */
const makeSigninUser = ({ userRepository }) => {
  return async (userAuthInfo, { onSuccess, onError }) => {
    try {
      const user = await userRepository.authBy(userAuthInfo);
      onSuccess(user);
    } catch (error) {
      onError(error);
    }
  };
};
export default makeSigninUser;

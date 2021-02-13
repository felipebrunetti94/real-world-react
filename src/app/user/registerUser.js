// @ts-check

import { User, UserRepository, UserAuthInfo } from "../../domain/user";

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
 * @function makeRegisterUser
 * @param {Dependencies} dependencies
 * @returns {(userInfo: UserAuthInfo, callback: Callback) => void}
 */
const makeRegisterUSer = ({ userRepository }) => {
  return async (userInfo, { onSuccess, onError }) => {
    try {
      const newUser = await userRepository.add(userInfo);

      onSuccess(newUser);
    } catch (error) {
      onError(error);
    }
  };
};

export default makeRegisterUSer;

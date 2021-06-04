// @ts-check

import { UserRepository, User, UserAuthInfo } from "../../domain/user/User";

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
 * @returns {(info: User, callback: Callback) => void}
 */
const makeEditUser =
  ({ userRepository }) =>
  async (user, { onError, onSuccess }) => {
    try {
      const { token, ...editedUser } = user;
      onSuccess(await userRepository.update(editedUser, token));
    } catch (error) {
      onError(error);
    }
  };

export default makeEditUser;

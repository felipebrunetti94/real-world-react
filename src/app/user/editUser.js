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
 * @returns {(info: UserAuthInfo, callback: Callback) => void}
 */
const makeEditUser =
  ({ userRepository }) =>
  async (editedUser, { onError, onSuccess }) => {
    try {
      const updatedUser = await userRepository.update(editedUser);
      onSuccess(updatedUser);
    } catch (error) {
      onError(error);
    }
  };

export default makeEditUser;

// @ts-check

import { UserRepository } from "../../domain/user";
import { ConduitService } from "../conduit/conduitService";

/**
 * @typedef Dependencies
 * @property {ConduitService} conduitService
 */

/**
 * @param {Dependencies} dependencies
 * @returns {UserRepository}
 */
const makeUserRepository = ({ conduitService }) => ({
  async add(user) {
    const { data } = await conduitService.post("users", { user });
    return data;
  },

  async authBy(userInfo) {
    const { data } = await conduitService.post("users/login", {
      user: userInfo,
    });
    return data;
  },

  async getByToken({ auth }) {
    const { data } = await conduitService.authGet("user", auth);
    return data;
  },

  async update(updadatedUser, { auth }) {
    const { data } = await conduitService.authPut("user", auth, {
      user: updadatedUser,
    });
    return data;
  },
});

export default makeUserRepository;

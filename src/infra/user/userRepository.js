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
    return data.user;
  },

  async authBy(userInfo) {
    const { data } = await conduitService.post("users/login", {
      user: userInfo,
    });

    return data.user;
  },

  async getByToken({ token }) {
    const { data } = await conduitService.authGet("user", token);
    return data.user;
  },

  async update(updadatedUser, { token }) {
    const { data } = await conduitService.authPut("user", token, {
      user: updadatedUser,
    });
    return data.user;
  },
});

export default makeUserRepository;

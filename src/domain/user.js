/**
 * @typedef User
 * @property {string} email
 * @property {string} token
 * @property {string} username
 * @property {string} bio
 * @property {string?} image
 */

/**
 * @typedef UserAuthInfo
 * @property {string?} username
 * @property {string?} email
 * @property {string?} password
 */

/**
 * @typedef UserRepository
 * @property {(userInfo: UserAuthInfo) => Promise<User>} add
 */

export default {};

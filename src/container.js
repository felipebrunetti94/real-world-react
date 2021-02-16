import conduitService from "./infra/conduit/conduitService";
import makeUserRepository from "./infra/user/userRepository";
import makeRegisterUser from "./app/user/registerUser";
import makeSigninUser from "./app/user/signinUser";

// -- INFRA --/
const userRepository = makeUserRepository(conduitService);

// -- USE CASES --/
export const registerUser = makeRegisterUser(userRepository);
export const signinUser = makeSigninUser(userRepository);

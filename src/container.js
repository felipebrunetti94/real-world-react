import conduitService from "./infra/conduit/conduitService";
import makeUserRepository from "./infra/user/userRepository";
import makeTagRepository from "./infra/tag/tagRepository";
import makeArticleRepository from "./infra/article/articleRepository";
import makeRegisterUser from "./app/user/registerUser";
import makeLoginUser from "./app/user/loginUser";
import makeGetPopularTags from "./app/tag/getPopularTags";
import makeGetGlobalFeed from "./app/article/getGlobalFeed";
import makeGetTagFeed from "./app/article/getTagFeed";
import makeGetUserFeed from "./app/article/getUserFeed";

// -- INFRA --/
const userRepository = makeUserRepository({ conduitService });
const tagRepository = makeTagRepository({ conduitService });
const articleRepository = makeArticleRepository({ conduitService });

// -- USE CASES --/
export const registerUser = makeRegisterUser({ userRepository });
export const loginUser = makeLoginUser({ userRepository });
export const getPopularTags = makeGetPopularTags({ tagRepository });
export const getGlobalFeed = makeGetGlobalFeed({ articleRepository });
export const getTagFeed = makeGetTagFeed({ articleRepository });
export const getUserFeed = makeGetUserFeed({ articleRepository });

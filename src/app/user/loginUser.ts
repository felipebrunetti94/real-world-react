import { User, UserAuthInfo, UserRepository } from "../../domain/user/User";

export type Callback = {
  onSuccess(user: User): void;
  onError(error: Error): void;
};

const makeLoginUser = (userRepository: UserRepository) => {
  return async (
    userAuthInfo: UserAuthInfo,
    { onSuccess, onError }: Callback
  ) => {
    try {
      const user = await userRepository.authBy(userAuthInfo);
      onSuccess(user);
    } catch (error) {
      onError(error as Error);
    }
  };
};

export default makeLoginUser;
